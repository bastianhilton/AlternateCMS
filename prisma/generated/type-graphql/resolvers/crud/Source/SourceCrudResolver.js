"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SourceCrudResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const AggregateSourceArgs_1 = require("./args/AggregateSourceArgs");
const CreateManySourceArgs_1 = require("./args/CreateManySourceArgs");
const CreateOneSourceArgs_1 = require("./args/CreateOneSourceArgs");
const DeleteManySourceArgs_1 = require("./args/DeleteManySourceArgs");
const DeleteOneSourceArgs_1 = require("./args/DeleteOneSourceArgs");
const FindFirstSourceArgs_1 = require("./args/FindFirstSourceArgs");
const FindManySourceArgs_1 = require("./args/FindManySourceArgs");
const FindUniqueSourceArgs_1 = require("./args/FindUniqueSourceArgs");
const GroupBySourceArgs_1 = require("./args/GroupBySourceArgs");
const UpdateManySourceArgs_1 = require("./args/UpdateManySourceArgs");
const UpdateOneSourceArgs_1 = require("./args/UpdateOneSourceArgs");
const UpsertOneSourceArgs_1 = require("./args/UpsertOneSourceArgs");
const helpers_1 = require("../../../helpers");
const Source_1 = require("../../../models/Source");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const AggregateSource_1 = require("../../outputs/AggregateSource");
const SourceGroupBy_1 = require("../../outputs/SourceGroupBy");
let SourceCrudResolver = class SourceCrudResolver {
    async aggregateSource(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).source.aggregate({
            ...args,
            ...(0, helpers_1.transformFields)((0, graphql_fields_1.default)(info)),
        });
    }
    async createManySource(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).source.createMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createOneSource(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).source.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteManySource(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).source.deleteMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteOneSource(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).source.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstSource(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).source.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async sources(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).source.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async source(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).source.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async groupBySource(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).source.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
    async updateManySource(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).source.updateMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateOneSource(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).source.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async upsertOneSource(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).source.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateSource_1.AggregateSource, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateSourceArgs_1.AggregateSourceArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], SourceCrudResolver.prototype, "aggregateSource", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateManySourceArgs_1.CreateManySourceArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], SourceCrudResolver.prototype, "createManySource", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Source_1.Source, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateOneSourceArgs_1.CreateOneSourceArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], SourceCrudResolver.prototype, "createOneSource", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteManySourceArgs_1.DeleteManySourceArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], SourceCrudResolver.prototype, "deleteManySource", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Source_1.Source, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteOneSourceArgs_1.DeleteOneSourceArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], SourceCrudResolver.prototype, "deleteOneSource", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Source_1.Source, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstSourceArgs_1.FindFirstSourceArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], SourceCrudResolver.prototype, "findFirstSource", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [Source_1.Source], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindManySourceArgs_1.FindManySourceArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], SourceCrudResolver.prototype, "sources", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Source_1.Source, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueSourceArgs_1.FindUniqueSourceArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], SourceCrudResolver.prototype, "source", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [SourceGroupBy_1.SourceGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupBySourceArgs_1.GroupBySourceArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], SourceCrudResolver.prototype, "groupBySource", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateManySourceArgs_1.UpdateManySourceArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], SourceCrudResolver.prototype, "updateManySource", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Source_1.Source, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateOneSourceArgs_1.UpdateOneSourceArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], SourceCrudResolver.prototype, "updateOneSource", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Source_1.Source, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpsertOneSourceArgs_1.UpsertOneSourceArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], SourceCrudResolver.prototype, "upsertOneSource", null);
SourceCrudResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Source_1.Source)
], SourceCrudResolver);
exports.SourceCrudResolver = SourceCrudResolver;
