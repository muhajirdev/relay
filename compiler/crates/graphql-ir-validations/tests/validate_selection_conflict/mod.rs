/*
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

use common::{SourceLocationKey, TextSource};
use fixture_tests::Fixture;
use graphql_cli::DiagnosticPrinter;
use graphql_ir::node_identifier::LocationAgnosticBehavior;
use graphql_ir::{build, Program};
use graphql_ir_validations::validate_selection_conflict;
use graphql_syntax::parse_executable;
use graphql_test_helpers::diagnostics_to_sorted_string;
use intern::string_key::StringKey;
use relay_test_schema::TEST_SCHEMA;
use std::sync::Arc;

#[derive(Clone)]
struct LocationAgnosticBehaviorForTestOnly;
impl LocationAgnosticBehavior for LocationAgnosticBehaviorForTestOnly {
    fn should_skip_in_node_identifier(_name: StringKey) -> bool {
        false
    }
    fn hash_for_name_only(_name: StringKey) -> bool {
        false
    }
}

pub fn transform_fixture(fixture: &Fixture<'_>) -> Result<String, String> {
    let source_location = SourceLocationKey::standalone(fixture.file_name);

    let ast = parse_executable(fixture.content, source_location).unwrap();
    let ir_result = build(&TEST_SCHEMA, &ast.definitions);
    let ir = match ir_result {
        Ok(res) => res,
        Err(errors) => {
            let mut errs = errors
                .into_iter()
                .map(|err| {
                    let printer = DiagnosticPrinter::new(|_| {
                        Some(TextSource::from_whole_document(fixture.content.to_string()))
                    });
                    printer.diagnostic_to_string(&err)
                })
                .collect::<Vec<_>>();
            errs.sort();
            return Err(errs.join("\n\n"));
        }
    };

    let program = Program::from_definitions(Arc::clone(&TEST_SCHEMA), ir);
    validate_selection_conflict::<LocationAgnosticBehaviorForTestOnly>(&program, false)
        .map_err(|diagnostics| diagnostics_to_sorted_string(fixture.content, &diagnostics))?;

    Ok("OK".to_owned())
}
