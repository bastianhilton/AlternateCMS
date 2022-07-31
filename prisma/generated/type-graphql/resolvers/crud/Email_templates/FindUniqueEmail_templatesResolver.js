"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueEmail_templatesResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const FindUniqueEmail_templatesArgs_1 = require("./args/FindUniqueEmail_templatesArgs");
const Email_templates_1 = require("../../../models/Email_templates");
const helpers_1 = require("../../../helpers");
let FindUniqueEmail_templatesResolver = class FindUniqueEmail_templatesResolver {
    async findUniqueEmail_templates(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).email_templates.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Email_templates_1.Email_templates, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueEmail_templatesArgs_1.FindUniqueEmail_templatesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindUniqueEmail_templatesResolver.prototype, "findUniqueEmail_templates", null);
FindUniqueEmail_templatesResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Email_templates_1.Email_templates)
], FindUniqueEmail_templatesResolver);
exports.FindUniqueEmail_templatesResolver = FindUniqueEmail_templatesResolver;
