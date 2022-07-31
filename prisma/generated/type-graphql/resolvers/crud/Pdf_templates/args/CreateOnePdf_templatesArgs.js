"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateOnePdf_templatesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Pdf_templatesCreateInput_1 = require("../../../inputs/Pdf_templatesCreateInput");
let CreateOnePdf_templatesArgs = class CreateOnePdf_templatesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Pdf_templatesCreateInput_1.Pdf_templatesCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Pdf_templatesCreateInput_1.Pdf_templatesCreateInput)
], CreateOnePdf_templatesArgs.prototype, "data", void 0);
CreateOnePdf_templatesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateOnePdf_templatesArgs);
exports.CreateOnePdf_templatesArgs = CreateOnePdf_templatesArgs;
