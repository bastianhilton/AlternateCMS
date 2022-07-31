"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertOnePdf_templatesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Pdf_templatesCreateInput_1 = require("../../../inputs/Pdf_templatesCreateInput");
const Pdf_templatesUpdateInput_1 = require("../../../inputs/Pdf_templatesUpdateInput");
const Pdf_templatesWhereUniqueInput_1 = require("../../../inputs/Pdf_templatesWhereUniqueInput");
let UpsertOnePdf_templatesArgs = class UpsertOnePdf_templatesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Pdf_templatesWhereUniqueInput_1.Pdf_templatesWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Pdf_templatesWhereUniqueInput_1.Pdf_templatesWhereUniqueInput)
], UpsertOnePdf_templatesArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Pdf_templatesCreateInput_1.Pdf_templatesCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Pdf_templatesCreateInput_1.Pdf_templatesCreateInput)
], UpsertOnePdf_templatesArgs.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Pdf_templatesUpdateInput_1.Pdf_templatesUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Pdf_templatesUpdateInput_1.Pdf_templatesUpdateInput)
], UpsertOnePdf_templatesArgs.prototype, "update", void 0);
UpsertOnePdf_templatesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpsertOnePdf_templatesArgs);
exports.UpsertOnePdf_templatesArgs = UpsertOnePdf_templatesArgs;
