"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteOnePdf_templatesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Pdf_templatesWhereUniqueInput_1 = require("../../../inputs/Pdf_templatesWhereUniqueInput");
let DeleteOnePdf_templatesArgs = class DeleteOnePdf_templatesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Pdf_templatesWhereUniqueInput_1.Pdf_templatesWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Pdf_templatesWhereUniqueInput_1.Pdf_templatesWhereUniqueInput)
], DeleteOnePdf_templatesArgs.prototype, "where", void 0);
DeleteOnePdf_templatesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteOnePdf_templatesArgs);
exports.DeleteOnePdf_templatesArgs = DeleteOnePdf_templatesArgs;
