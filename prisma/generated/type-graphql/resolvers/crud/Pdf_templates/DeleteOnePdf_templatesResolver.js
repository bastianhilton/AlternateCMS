"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteOnePdf_templatesResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const DeleteOnePdf_templatesArgs_1 = require("./args/DeleteOnePdf_templatesArgs");
const Pdf_templates_1 = require("../../../models/Pdf_templates");
const helpers_1 = require("../../../helpers");
let DeleteOnePdf_templatesResolver = class DeleteOnePdf_templatesResolver {
    async deleteOnePdf_templates(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).pdf_templates.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Pdf_templates_1.Pdf_templates, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteOnePdf_templatesArgs_1.DeleteOnePdf_templatesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], DeleteOnePdf_templatesResolver.prototype, "deleteOnePdf_templates", null);
DeleteOnePdf_templatesResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Pdf_templates_1.Pdf_templates)
], DeleteOnePdf_templatesResolver);
exports.DeleteOnePdf_templatesResolver = DeleteOnePdf_templatesResolver;
