/*
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

use common::Span;
use relay_docblock::DocblockIr;

use crate::LSPRuntimeResult;
use crate::{
    docblock_resolution_info::{create_docblock_resolution_info, DocblockResolutionInfo},
    lsp_runtime_error::LSPRuntimeError,
};

use super::DefinitionDescription;

pub fn get_docblock_definition_description(
    docblock_ir: DocblockIr,
    position_span: Span,
) -> LSPRuntimeResult<DefinitionDescription> {
    let resolution = create_docblock_resolution_info(docblock_ir, position_span)?;
    match resolution {
        DocblockResolutionInfo::OnType(type_name) => Ok(DefinitionDescription::Type { type_name }),
        DocblockResolutionInfo::OnInterface(interface_name) => Ok(DefinitionDescription::Type {
            type_name: interface_name,
        }),
        DocblockResolutionInfo::EdgeTo(edge_type) => Ok(DefinitionDescription::Type {
            type_name: edge_type,
        }),
        DocblockResolutionInfo::RootFragment(fragment_name) => {
            Ok(DefinitionDescription::Fragment { fragment_name })
        }
        DocblockResolutionInfo::FieldName(_) => {
            // The field name _id_ the definition of the field.
            Err(LSPRuntimeError::ExpectedError)
        }
        DocblockResolutionInfo::Deprecated => {
            // We don't currently have any go to definition support for
            // schema directives.
            Err(LSPRuntimeError::ExpectedError)
        }
    }
}
