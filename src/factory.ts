/**
 * @author WMXPY
 * @namespace MarkedMixinParseMonaco
 * @description Factory
 */

import { MarkedMonacoExportsMixinFactory } from "@sudoo/marked-monaco-mixin";
import { MarkedParseMixinDeclaration } from "./declaration";

export const markedParseMonacoMixinFactory =
    MarkedMonacoExportsMixinFactory.fromExports(
        "marked-mixin-parse",
        MarkedParseMixinDeclaration,
    );
