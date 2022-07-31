"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteOneEmail_templatesResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const DeleteOneEmail_templatesArgs_1 = require("./args/DeleteOneEmail_templatesArgs");
const Email_templates_1 = require("../../../models/Email_templates");
const helpers_1 = require("../../../helpers");
let DeleteOneEmail_templatesResolver = class DeleteOneEmail_templatesResolver {
    async deleteOneEmail_templates(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).email_templates.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Email_templates_1.Email_templates, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteOneEmail_templatesArgs_1.DeleteOneEmail_templatesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], DeleteOneEmail_templatesResolver.prototype, "deleteOneEmail_templates", null);
DeleteOneEmail_templatesResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Email_templates_1.Email_templates)
], DeleteOneEmail_templatesResolver);
exports.DeleteOneEmail_templatesResolver = DeleteOneEmail_templatesResolver;
