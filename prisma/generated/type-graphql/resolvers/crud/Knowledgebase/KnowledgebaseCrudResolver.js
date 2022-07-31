"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.KnowledgebaseCrudResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const AggregateKnowledgebaseArgs_1 = require("./args/AggregateKnowledgebaseArgs");
const CreateManyKnowledgebaseArgs_1 = require("./args/CreateManyKnowledgebaseArgs");
const CreateOneKnowledgebaseArgs_1 = require("./args/CreateOneKnowledgebaseArgs");
const DeleteManyKnowledgebaseArgs_1 = require("./args/DeleteManyKnowledgebaseArgs");
const DeleteOneKnowledgebaseArgs_1 = require("./args/DeleteOneKnowledgebaseArgs");
const FindFirstKnowledgebaseArgs_1 = require("./args/FindFirstKnowledgebaseArgs");
const FindManyKnowledgebaseArgs_1 = require("./args/FindManyKnowledgebaseArgs");
const FindUniqueKnowledgebaseArgs_1 = require("./args/FindUniqueKnowledgebaseArgs");
const GroupByKnowledgebaseArgs_1 = require("./args/GroupByKnowledgebaseArgs");
const UpdateManyKnowledgebaseArgs_1 = require("./args/UpdateManyKnowledgebaseArgs");
const UpdateOneKnowledgebaseArgs_1 = require("./args/UpdateOneKnowledgebaseArgs");
const UpsertOneKnowledgebaseArgs_1 = require("./args/UpsertOneKnowledgebaseArgs");
const helpers_1 = require("../../../helpers");
const Knowledgebase_1 = require("../../../models/Knowledgebase");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const AggregateKnowledgebase_1 = require("../../outputs/AggregateKnowledgebase");
const KnowledgebaseGroupBy_1 = require("../../outputs/KnowledgebaseGroupBy");
let KnowledgebaseCrudResolver = class KnowledgebaseCrudResolver {
    async aggregateKnowledgebase(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).knowledgebase.aggregate({
            ...args,
            ...(0, helpers_1.transformFields)((0, graphql_fields_1.default)(info)),
        });
    }
    async createManyKnowledgebase(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).knowledgebase.createMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createOneKnowledgebase(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).knowledgebase.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteManyKnowledgebase(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).knowledgebase.deleteMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteOneKnowledgebase(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).knowledgebase.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstKnowledgebase(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).knowledgebase.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async knowledgebases(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).knowledgebase.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async knowledgebase(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).knowledgebase.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async groupByKnowledgebase(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).knowledgebase.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
    async updateManyKnowledgebase(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).knowledgebase.updateMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateOneKnowledgebase(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).knowledgebase.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async upsertOneKnowledgebase(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).knowledgebase.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateKnowledgebase_1.AggregateKnowledgebase, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateKnowledgebaseArgs_1.AggregateKnowledgebaseArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], KnowledgebaseCrudResolver.prototype, "aggregateKnowledgebase", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateManyKnowledgebaseArgs_1.CreateManyKnowledgebaseArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], KnowledgebaseCrudResolver.prototype, "createManyKnowledgebase", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Knowledgebase_1.Knowledgebase, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateOneKnowledgebaseArgs_1.CreateOneKnowledgebaseArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], KnowledgebaseCrudResolver.prototype, "createOneKnowledgebase", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteManyKnowledgebaseArgs_1.DeleteManyKnowledgebaseArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], KnowledgebaseCrudResolver.prototype, "deleteManyKnowledgebase", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Knowledgebase_1.Knowledgebase, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteOneKnowledgebaseArgs_1.DeleteOneKnowledgebaseArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], KnowledgebaseCrudResolver.prototype, "deleteOneKnowledgebase", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Knowledgebase_1.Knowledgebase, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstKnowledgebaseArgs_1.FindFirstKnowledgebaseArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], KnowledgebaseCrudResolver.prototype, "findFirstKnowledgebase", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [Knowledgebase_1.Knowledgebase], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindManyKnowledgebaseArgs_1.FindManyKnowledgebaseArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], KnowledgebaseCrudResolver.prototype, "knowledgebases", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Knowledgebase_1.Knowledgebase, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueKnowledgebaseArgs_1.FindUniqueKnowledgebaseArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], KnowledgebaseCrudResolver.prototype, "knowledgebase", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [KnowledgebaseGroupBy_1.KnowledgebaseGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupByKnowledgebaseArgs_1.GroupByKnowledgebaseArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], KnowledgebaseCrudResolver.prototype, "groupByKnowledgebase", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateManyKnowledgebaseArgs_1.UpdateManyKnowledgebaseArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], KnowledgebaseCrudResolver.prototype, "updateManyKnowledgebase", null);
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
], KnowledgebaseCrudResolver.prototype, "updateOneKnowledgebase", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Knowledgebase_1.Knowledgebase, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpsertOneKnowledgebaseArgs_1.UpsertOneKnowledgebaseArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], KnowledgebaseCrudResolver.prototype, "upsertOneKnowledgebase", null);
KnowledgebaseCrudResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Knowledgebase_1.Knowledgebase)
], KnowledgebaseCrudResolver);
exports.KnowledgebaseCrudResolver = KnowledgebaseCrudResolver;
