/*
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

use crate::writer::{Prop, SortedASTList, SortedStringKeyList, StringLiteral, Writer, AST};
use crate::{KEY_DATA, KEY_FRAGMENT_SPREADS, KEY_FRAGMENT_TYPE};
use intern::string_key::{Intern, StringKey};
use itertools::Itertools;
use relay_config::TypegenConfig;
use std::fmt::{Result as FmtResult, Write};

pub struct TypeScriptPrinter {
    result: String,
    use_import_type_syntax: bool,
    indentation: usize,
}

impl Write for TypeScriptPrinter {
    fn write_str(&mut self, s: &str) -> FmtResult {
        self.result.write_str(s)
    }
}

impl Writer for TypeScriptPrinter {
    fn into_string(self: Box<Self>) -> String {
        self.result
    }

    fn get_runtime_fragment_import(&self) -> &'static str {
        "FragmentRefs"
    }

    fn write(&mut self, ast: &AST) -> FmtResult {
        match ast {
            AST::Any => write!(&mut self.result, "any"),
            AST::String => write!(&mut self.result, "string"),
            AST::StringLiteral(literal) => self.write_string_literal(**literal),
            AST::OtherTypename => self.write_other_string(),
            AST::Number => write!(&mut self.result, "number"),
            AST::Boolean => write!(&mut self.result, "boolean"),
            AST::Callable(return_type) => self.write_callable(&*return_type),
            AST::Identifier(identifier) => write!(&mut self.result, "{}", identifier),
            AST::RawType(raw) => write!(&mut self.result, "{}", raw),
            AST::Union(members) => self.write_union(members),
            AST::ReadOnlyArray(of_type) => self.write_read_only_array(of_type),
            AST::Nullable(of_type) => self.write_nullable(of_type),
            AST::NonNullable(of_type) => self.write_non_nullable(of_type),
            AST::ExactObject(object) => self.write_object(object),
            AST::InexactObject(object) => self.write_object(object),
            AST::Local3DPayload(document_name, selections) => {
                self.write_local_3d_payload(*document_name, selections)
            }
            AST::FragmentReference(fragments) => self.write_fragment_references(fragments),
            AST::FragmentReferenceType(fragment) => self.write_fragment_references_type(*fragment),
            AST::ReturnTypeOfFunctionWithName(function_name) => {
                self.write_return_type_of_function_with_name(*function_name)
            }
            AST::ActorChangePoint(_) => {
                panic!("ActorChangePoint is not supported yet in Typescript")
            }
            AST::ReturnTypeOfMethodCall(object, method_name) => {
                self.write_return_type_of_method_call(object, *method_name)
            }
            AST::AssertFunctionType(_) => {
                // TODO: Implement type generation for typescript
                Ok(())
            }
        }
    }

    fn write_local_type(&mut self, name: &str, value: &AST) -> FmtResult {
        write!(&mut self.result, "type {} = ", name)?;
        self.write(value)?;
        writeln!(&mut self.result, ";")
    }

    fn write_export_type(&mut self, name: &str, value: &AST) -> FmtResult {
        write!(&mut self.result, "export type {} = ", name)?;
        self.write(value)?;
        writeln!(&mut self.result, ";")
    }

    fn write_import_module_default(&mut self, name: &str, from: &str) -> FmtResult {
        writeln!(&mut self.result, "import {} from \"{}\";", name, from)
    }

    fn write_import_type(&mut self, types: &[&str], from: &str) -> FmtResult {
        writeln!(
            &mut self.result,
            "import {}{{ {} }} from \"{}\";",
            if self.use_import_type_syntax {
                "type "
            } else {
                ""
            },
            types.iter().format(", "),
            from
        )
    }

    // In TypeScript, we don't need to import "any" fragment types, these are unused.
    fn write_any_type_definition(&mut self, _name: &str) -> FmtResult {
        Ok(())
    }

    // In TypeScript, we don't export & import fragments. We just use the generic FragmentRefs type instead.
    fn write_import_fragment_type(&mut self, _types: &[&str], _from: &str) -> FmtResult {
        Ok(())
    }

    fn write_export_fragment_type(&mut self, _name: &str) -> FmtResult {
        Ok(())
    }

    fn write_export_fragment_types(
        &mut self,
        _fragment_type_name_1: &str,
        _fragment_type_name_2: &str,
    ) -> FmtResult {
        Ok(())
    }
}

impl TypeScriptPrinter {
    pub fn new(config: &TypegenConfig) -> Self {
        Self {
            result: String::new(),
            indentation: 0,
            use_import_type_syntax: config.use_import_type_syntax,
        }
    }

    fn write_indentation(&mut self) -> FmtResult {
        self.result.write_str(&"  ".repeat(self.indentation))
    }

    fn write_string_literal(&mut self, literal: StringKey) -> FmtResult {
        write!(&mut self.result, "\"{}\"", literal)
    }

    fn write_other_string(&mut self) -> FmtResult {
        write!(&mut self.result, r#""%other""#)
    }

    fn write_union(&mut self, members: &[AST]) -> FmtResult {
        let mut first = true;
        for member in members {
            if first {
                first = false;
            } else {
                write!(&mut self.result, " | ")?;
            }
            self.write(member)?;
        }
        Ok(())
    }

    fn write_read_only_array(&mut self, of_type: &AST) -> FmtResult {
        write!(&mut self.result, "ReadonlyArray<")?;
        self.write(of_type)?;
        write!(&mut self.result, ">")
    }

    fn write_non_nullable(&mut self, of_type: &AST) -> FmtResult {
        write!(&mut self.result, "NonNullable<")?;
        self.write(of_type)?;
        write!(&mut self.result, ">")
    }

    fn write_nullable(&mut self, of_type: &AST) -> FmtResult {
        let null_type = AST::RawType("null".intern());
        if let AST::Union(members) = of_type {
            let mut new_members = Vec::with_capacity(members.len() + 1);
            new_members.extend_from_slice(members);
            new_members.push(null_type);
            self.write_union(&*new_members)?;
        } else {
            self.write_union(&*vec![of_type.clone(), null_type])?;
        }
        Ok(())
    }

    fn write_object(&mut self, props: &[Prop]) -> FmtResult {
        if props.is_empty() {
            write!(&mut self.result, "{{}}")?;
            return Ok(());
        }

        // Replication of babel printer oddity: objects only containing a spread
        // are missing a newline.
        if props.len() == 1 {
            if let Prop::Spread(_) = props[0] {
                write!(&mut self.result, "{{}}")?;
                return Ok(());
            }
        }

        writeln!(&mut self.result, "{{")?;
        self.indentation += 1;

        for prop in props {
            match prop {
                Prop::Spread(_) => continue,
                Prop::KeyValuePair(key_value_pair) => {
                    self.write_indentation()?;
                    if let AST::OtherTypename = key_value_pair.value {
                        writeln!(
                            &mut self.result,
                            "// This will never be '%other', but we need some"
                        )?;
                        self.write_indentation()?;
                        writeln!(
                            &mut self.result,
                            "// value in case none of the concrete values match."
                        )?;
                        self.write_indentation()?;
                    }
                    if key_value_pair.read_only {
                        write!(&mut self.result, "readonly ")?;
                    }
                    if key_value_pair.key == *KEY_FRAGMENT_SPREADS
                        || key_value_pair.key == *KEY_FRAGMENT_TYPE
                        || key_value_pair.key == *KEY_DATA
                    {
                        write!(&mut self.result, "\" {}\"", key_value_pair.key)?;
                    } else {
                        write!(&mut self.result, "{}", key_value_pair.key)?;
                    }
                    if key_value_pair.optional {
                        write!(&mut self.result, "?")?;
                    }
                    write!(&mut self.result, ": ")?;
                    self.write(&key_value_pair.value)?;
                    writeln!(&mut self.result, ";")?;
                }
                Prop::GetterSetterPair(_) => {
                    panic!(
                        "Getters and setters with different types are not implemented in typescript. See https://github.com/microsoft/TypeScript/issues/43662"
                    );
                }
            }
        }
        self.indentation -= 1;
        self.write_indentation()?;
        write!(&mut self.result, "}}")?;
        Ok(())
    }

    fn write_local_3d_payload(&mut self, document_name: StringKey, selections: &AST) -> FmtResult {
        write!(&mut self.result, "Local3DPayload<\"{}\", ", document_name)?;
        self.write(selections)?;
        write!(&mut self.result, ">")?;
        Ok(())
    }

    fn write_fragment_references(&mut self, fragments: &SortedStringKeyList) -> FmtResult {
        write!(&mut self.result, "FragmentRefs<")?;
        self.write(&AST::Union(SortedASTList::new(
            fragments
                .iter()
                .map(|key| AST::StringLiteral(StringLiteral(*key)))
                .collect(),
        )))?;
        write!(&mut self.result, ">")
    }

    fn write_fragment_references_type(&mut self, fragment: StringKey) -> FmtResult {
        self.write(&AST::StringLiteral(StringLiteral(fragment)))
    }

    fn write_return_type_of_function_with_name(&mut self, function_name: StringKey) -> FmtResult {
        write!(&mut self.result, "ReturnType<typeof {}>", function_name)
    }

    fn write_return_type_of_method_call(
        &mut self,
        object: &AST,
        method_name: StringKey,
    ) -> FmtResult {
        write!(&mut self.result, "ReturnType<")?;
        self.write(object)?;
        write!(&mut self.result, "[\"{}\"]>", method_name)
    }

    fn write_callable(&mut self, return_type: &AST) -> FmtResult {
        write!(&mut self.result, "() => ")?;
        self.write(return_type)
    }
}

#[cfg(test)]
mod tests {
    use crate::writer::{ExactObject, InexactObject, KeyValuePairProp, SortedASTList};

    use super::*;
    use intern::string_key::Intern;

    fn print_type(ast: &AST) -> String {
        print_type_with_config(ast)
    }

    fn print_type_with_config(ast: &AST) -> String {
        let mut printer = Box::new(TypeScriptPrinter::new(&Default::default()));
        printer.write(ast).unwrap();
        printer.into_string()
    }

    #[test]
    fn scalar_types() {
        assert_eq!(print_type(&AST::Any), "any".to_string());
        assert_eq!(print_type(&AST::String), "string".to_string());
        assert_eq!(print_type(&AST::Number), "number".to_string());
    }

    #[test]
    fn union_type() {
        assert_eq!(
            print_type(&AST::Union(SortedASTList::new(vec![
                AST::String,
                AST::Number
            ]))),
            "string | number".to_string()
        );
    }

    #[test]
    fn read_only_array_type() {
        assert_eq!(
            print_type(&AST::ReadOnlyArray(Box::new(AST::String))),
            "ReadonlyArray<string>".to_string()
        );
    }

    #[test]
    fn nullable_type() {
        assert_eq!(
            print_type(&AST::Nullable(Box::new(AST::String))),
            "string | null".to_string()
        );

        assert_eq!(
            print_type(&AST::Nullable(Box::new(AST::Union(SortedASTList::new(
                vec![AST::String, AST::Number],
            ))))),
            "string | number | null"
        )
    }

    #[test]
    fn exact_object() {
        assert_eq!(
            print_type(&AST::ExactObject(ExactObject::new(Vec::new()))),
            r"{}".to_string()
        );

        assert_eq!(
            print_type(&AST::ExactObject(ExactObject::new(vec![
                Prop::KeyValuePair(KeyValuePairProp {
                    key: "single".intern(),
                    optional: false,
                    read_only: false,
                    value: AST::String,
                })
            ]))),
            r"{
  single: string;
}"
            .to_string()
        );
        assert_eq!(
            print_type(&AST::ExactObject(ExactObject::new(vec![
                Prop::KeyValuePair(KeyValuePairProp {
                    key: "foo".intern(),
                    optional: true,
                    read_only: false,
                    value: AST::String,
                }),
                Prop::KeyValuePair(KeyValuePairProp {
                    key: "bar".intern(),
                    optional: false,
                    read_only: true,
                    value: AST::Number,
                }),
            ]))),
            r"{
  readonly bar: number;
  foo?: string;
}"
            .to_string()
        );
    }

    #[test]
    fn nested_object() {
        assert_eq!(
            print_type(&AST::ExactObject(ExactObject::new(vec![
                Prop::KeyValuePair(KeyValuePairProp {
                    key: "foo".intern(),
                    optional: true,
                    read_only: false,
                    value: AST::ExactObject(ExactObject::new(vec![
                        Prop::KeyValuePair(KeyValuePairProp {
                            key: "nested_foo".intern(),
                            optional: true,
                            read_only: false,
                            value: AST::String,
                        }),
                        Prop::KeyValuePair(KeyValuePairProp {
                            key: "nested_foo2".intern(),
                            optional: false,
                            read_only: true,
                            value: AST::Number,
                        }),
                    ])),
                }),
                Prop::KeyValuePair(KeyValuePairProp {
                    key: "bar".intern(),
                    optional: false,
                    read_only: true,
                    value: AST::Number,
                }),
            ]))),
            r"{
  readonly bar: number;
  foo?: {
    nested_foo?: string;
    readonly nested_foo2: number;
  };
}"
            .to_string()
        );
    }

    #[test]
    fn inexact_object() {
        assert_eq!(
            print_type(&AST::InexactObject(InexactObject::new(Vec::new()))),
            "{}".to_string()
        );

        assert_eq!(
            print_type(&AST::InexactObject(InexactObject::new(vec![
                Prop::KeyValuePair(KeyValuePairProp {
                    key: "single".intern(),
                    optional: false,
                    read_only: false,
                    value: AST::String,
                }),
            ]))),
            r"{
  single: string;
}"
            .to_string()
        );

        assert_eq!(
            print_type(&AST::InexactObject(InexactObject::new(vec![
                Prop::KeyValuePair(KeyValuePairProp {
                    key: "foo".intern(),
                    optional: false,
                    read_only: false,
                    value: AST::String,
                }),
                Prop::KeyValuePair(KeyValuePairProp {
                    key: "bar".intern(),
                    optional: true,
                    read_only: true,
                    value: AST::Number,
                })
            ]))),
            r"{
  readonly bar?: number;
  foo: string;
}"
            .to_string()
        );
    }

    #[test]
    fn other_comment() {
        assert_eq!(
            print_type(&AST::ExactObject(ExactObject::new(vec![
                Prop::KeyValuePair(KeyValuePairProp {
                    key: "with_comment".intern(),
                    optional: false,
                    read_only: false,
                    value: AST::OtherTypename,
                }),
            ]))),
            r#"{
  // This will never be '%other', but we need some
  // value in case none of the concrete values match.
  with_comment: "%other";
}"#
            .to_string()
        );
    }

    #[test]
    fn import_type() {
        let mut printer = Box::new(TypeScriptPrinter::new(&Default::default()));
        printer.write_import_type(&["A", "B"], "module").unwrap();
        assert_eq!(printer.into_string(), "import { A, B } from \"module\";\n");

        let mut printer = Box::new(TypeScriptPrinter::new(&TypegenConfig {
            use_import_type_syntax: true,
            ..Default::default()
        }));
        printer.write_import_type(&["C"], "./foo").unwrap();
        assert_eq!(printer.into_string(), "import type { C } from \"./foo\";\n");
    }

    #[test]
    fn import_module() {
        let mut printer = Box::new(TypeScriptPrinter::new(&Default::default()));
        printer.write_import_module_default("A", "module").unwrap();
        assert_eq!(printer.into_string(), "import A from \"module\";\n");
    }

    #[test]
    fn function_return_type() {
        assert_eq!(
            print_type(&AST::ReturnTypeOfFunctionWithName("someFunc".intern(),)),
            "ReturnType<typeof someFunc>".to_string()
        );
    }
}
