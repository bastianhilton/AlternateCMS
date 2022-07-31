"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Url_rewritesCrudResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const AggregateUrl_rewritesArgs_1 = require("./args/AggregateUrl_rewritesArgs");
const CreateManyUrl_rewritesArgs_1 = require("./args/CreateManyUrl_rewritesArgs");
const CreateOneUrl_rewritesArgs_1 = require("./args/CreateOneUrl_rewritesArgs");
const DeleteManyUrl_rewritesArgs_1 = require("./args/DeleteManyUrl_rewritesArgs");
const DeleteOneUrl_rewritesArgs_1 = require("./args/DeleteOneUrl_rewritesArgs");
const FindFirstUrl_rewritesArgs_1 = require("./args/FindFirstUrl_rewritesArgs");
const FindManyUrl_rewritesArgs_1 = require("./args/FindManyUrl_rewritesArgs");
const FindUniqueUrl_rewritesArgs_1 = require("./args/FindUniqueUrl_rewritesArgs");
const GroupByUrl_rewritesArgs_1 = require("./args/GroupByUrl_rewritesArgs");
const UpdateManyUrl_rewritesArgs_1 = require("./args/UpdateManyUrl_rewritesArgs");
const UpdateOneUrl_rewritesArgs_1 = require("./args/UpdateOneUrl_rewritesArgs");
const UpsertOneUrl_rewritesArgs_1 = require("./args/UpsertOneUrl_rewritesArgs");
const helpers_1 = require("../../../helpers");
const Url_rewrites_1 = require("../../../models/Url_rewrites");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const AggregateUrl_rewrites_1 = require("../../outputs/AggregateUrl_rewrites");
const Url_rewritesGroupBy_1 = require("../../outputs/Url_rewritesGroupBy");
let Url_rewritesCrudResolver = class Url_rewritesCrudResolver {
    async aggregateUrl_rewrites(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).url_rewrites.aggregate({
            ...args,
            ...(0, helpers_1.transformFields)((0, graphql_fields_1.default)(info)),
        });
    }
    async createManyUrl_rewrites(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).url_rewrites.createMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createOneUrl_rewrites(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).url_rewrites.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteManyUrl_rewrites(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).url_rewrites.deleteMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteOneUrl_rewrites(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).url_rewrites.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstUrl_rewrites(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).url_rewrites.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findManyUrl_rewrites(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).url_rewrites.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findUniqueUrl_rewrites(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).url_rewrites.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async groupByUrl_rewrites(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).url_rewrites.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
    async updateManyUrl_rewrites(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).url_rewrites.updateMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateOneUrl_rewrites(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).url_rewrites.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async upsertOneUrl_rewrites(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).url_rewrites.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateUrl_rewrites_1.AggregateUrl_rewrites, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateUrl_rewritesArgs_1.AggregateUrl_rewritesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], Url_rewritesCrudResolver.prototype, "aggregateUrl_rewrites", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateManyUrl_rewritesArgs_1.CreateManyUrl_rewritesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], Url_rewritesCrudResolver.prototype, "createManyUrl_rewrites", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Url_rewrites_1.Url_rewrites, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateOneUrl_rewritesArgs_1.CreateOneUrl_rewritesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], Url_rewritesCrudResolver.prototype, "createOneUrl_rewrites", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteManyUrl_rewritesArgs_1.DeleteManyUrl_rewritesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], Url_rewritesCrudResolver.prototype, "deleteManyUrl_rewrites", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Url_rewrites_1.Url_rewrites, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteOneUrl_rewritesArgs_1.DeleteOneUrl_rewritesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], Url_rewritesCrudResolver.prototype, "deleteOneUrl_rewrites", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Url_rewrites_1.Url_rewrites, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstUrl_rewritesArgs_1.FindFirstUrl_rewritesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], Url_rewritesCrudResolver.prototype, "findFirstUrl_rewrites", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [Url_rewrites_1.Url_rewrites], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindManyUrl_rewritesArgs_1.FindManyUrl_rewritesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], Url_rewritesCrudResolver.prototype, "findManyUrl_rewrites", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Url_rewrites_1.Url_rewrites, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueUrl_rewritesArgs_1.FindUniqueUrl_rewritesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], Url_rewritesCrudResolver.prototype, "findUniqueUrl_rewrites", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [Url_rewritesGroupBy_1.Url_rewritesGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupByUrl_rewritesArgs_1.GroupByUrl_rewritesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], Url_rewritesCrudResolver.prototype, "groupByUrl_rewrites", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateManyUrl_rewritesArgs_1.UpdateManyUrl_rewritesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], Url_rewritesCrudResolver.prototype, "updateManyUrl_rewrites", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Url_rewrites_1.Url_rewrites, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateOneUrl_rewritesArgs_1.UpdateOneUrl_rewritesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], Url_rewritesCrudResolver.prototype, "updateOneUrl_rewrites", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Url_rewrites_1.Url_rewrites, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpsertOneUrl_rewritesArgs_1.UpsertOneUrl_rewritesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], Url_rewritesCrudResolver.prototype, "upsertOneUrl_rewrites", null);
Url_rewritesCrudResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Url_rewrites_1.Url_rewrites)
], Url_rewritesCrudResolver);
exports.Url_rewritesCrudResolver = Url_rewritesCrudResolver;
