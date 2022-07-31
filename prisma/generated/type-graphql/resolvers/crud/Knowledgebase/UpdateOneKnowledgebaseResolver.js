"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateOneKnowledgebaseResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const UpdateOneKnowledgebaseArgs_1 = require("./args/UpdateOneKnowledgebaseArgs");
const Knowledgebase_1 = require("../../../models/Knowledgebase");
const helpers_1 = require("../../../helpers");
let UpdateOneKnowledgebaseResolver = class UpdateOneKnowledgebaseResolver {
    async updateOneKnowledgebase(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).knowledgebase.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Knowledgebase_1.Knowledgebase, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateOneKnowledgebaseArgs_1.UpdateOneKnowledgebaseArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UpdateOneKnowledgebaseResolver.prototype, "updateOneKnowledgebase", null);
UpdateOneKnowledgebaseResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Knowledgebase_1.Knowledgebase)
], UpdateOneKnowledgebaseResolver);
exports.UpdateOneKnowledgebaseResolver = UpdateOneKnowledgebaseResolver;
