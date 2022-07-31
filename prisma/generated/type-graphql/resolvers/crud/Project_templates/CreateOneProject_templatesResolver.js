"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateOneProject_templatesResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const CreateOneProject_templatesArgs_1 = require("./args/CreateOneProject_templatesArgs");
const Project_templates_1 = require("../../../models/Project_templates");
const helpers_1 = require("../../../helpers");
let CreateOneProject_templatesResolver = class CreateOneProject_templatesResolver {
    async createOneProject_templates(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).project_templates.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Project_templates_1.Project_templates, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateOneProject_templatesArgs_1.CreateOneProject_templatesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CreateOneProject_templatesResolver.prototype, "createOneProject_templates", null);
CreateOneProject_templatesResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Project_templates_1.Project_templates)
], CreateOneProject_templatesResolver);
exports.CreateOneProject_templatesResolver = CreateOneProject_templatesResolver;
