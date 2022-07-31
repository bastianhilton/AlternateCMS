"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateOnePdf_templatesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Pdf_templatesUpdateInput_1 = require("../../../inputs/Pdf_templatesUpdateInput");
const Pdf_templatesWhereUniqueInput_1 = require("../../../inputs/Pdf_templatesWhereUniqueInput");
let UpdateOnePdf_templatesArgs = class UpdateOnePdf_templatesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Pdf_templatesUpdateInput_1.Pdf_templatesUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Pdf_templatesUpdateInput_1.Pdf_templatesUpdateInput)
], UpdateOnePdf_templatesArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Pdf_templatesWhereUniqueInput_1.Pdf_templatesWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Pdf_templatesWhereUniqueInput_1.Pdf_templatesWhereUniqueInput)
], UpdateOnePdf_templatesArgs.prototype, "where", void 0);
UpdateOnePdf_templatesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateOnePdf_templatesArgs);
exports.UpdateOnePdf_templatesArgs = UpdateOnePdf_templatesArgs;
