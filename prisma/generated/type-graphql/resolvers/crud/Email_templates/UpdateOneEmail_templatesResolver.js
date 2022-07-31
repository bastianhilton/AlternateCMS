"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateOneEmail_templatesResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const UpdateOneEmail_templatesArgs_1 = require("./args/UpdateOneEmail_templatesArgs");
const Email_templates_1 = require("../../../models/Email_templates");
const helpers_1 = require("../../../helpers");
let UpdateOneEmail_templatesResolver = class UpdateOneEmail_templatesResolver {
    async updateOneEmail_templates(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).email_templates.update({
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
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateOneEmail_templatesArgs_1.UpdateOneEmail_templatesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UpdateOneEmail_templatesResolver.prototype, "updateOneEmail_templates", null);
UpdateOneEmail_templatesResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Email_templates_1.Email_templates)
], UpdateOneEmail_templatesResolver);
exports.UpdateOneEmail_templatesResolver = UpdateOneEmail_templatesResolver;
