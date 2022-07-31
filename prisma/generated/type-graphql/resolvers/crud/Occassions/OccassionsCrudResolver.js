"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OccassionsCrudResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const AggregateOccassionsArgs_1 = require("./args/AggregateOccassionsArgs");
const CreateManyOccassionsArgs_1 = require("./args/CreateManyOccassionsArgs");
const CreateOneOccassionsArgs_1 = require("./args/CreateOneOccassionsArgs");
const DeleteManyOccassionsArgs_1 = require("./args/DeleteManyOccassionsArgs");
const DeleteOneOccassionsArgs_1 = require("./args/DeleteOneOccassionsArgs");
const FindFirstOccassionsArgs_1 = require("./args/FindFirstOccassionsArgs");
const FindManyOccassionsArgs_1 = require("./args/FindManyOccassionsArgs");
const FindUniqueOccassionsArgs_1 = require("./args/FindUniqueOccassionsArgs");
const GroupByOccassionsArgs_1 = require("./args/GroupByOccassionsArgs");
const UpdateManyOccassionsArgs_1 = require("./args/UpdateManyOccassionsArgs");
const UpdateOneOccassionsArgs_1 = require("./args/UpdateOneOccassionsArgs");
const UpsertOneOccassionsArgs_1 = require("./args/UpsertOneOccassionsArgs");
const helpers_1 = require("../../../helpers");
const Occassions_1 = require("../../../models/Occassions");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const AggregateOccassions_1 = require("../../outputs/AggregateOccassions");
const OccassionsGroupBy_1 = require("../../outputs/OccassionsGroupBy");
let OccassionsCrudResolver = class OccassionsCrudResolver {
    async aggregateOccassions(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).occassions.aggregate({
            ...args,
            ...(0, helpers_1.transformFields)((0, graphql_fields_1.default)(info)),
        });
    }
    async createManyOccassions(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).occassions.createMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createOneOccassions(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).occassions.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteManyOccassions(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).occassions.deleteMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteOneOccassions(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).occassions.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstOccassions(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).occassions.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findManyOccassions(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).occassions.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findUniqueOccassions(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).occassions.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async groupByOccassions(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).occassions.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
    async updateManyOccassions(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).occassions.updateMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateOneOccassions(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).occassions.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async upsertOneOccassions(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).occassions.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateOccassions_1.AggregateOccassions, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateOccassionsArgs_1.AggregateOccassionsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], OccassionsCrudResolver.prototype, "aggregateOccassions", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateManyOccassionsArgs_1.CreateManyOccassionsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], OccassionsCrudResolver.prototype, "createManyOccassions", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Occassions_1.Occassions, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateOneOccassionsArgs_1.CreateOneOccassionsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], OccassionsCrudResolver.prototype, "createOneOccassions", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteManyOccassionsArgs_1.DeleteManyOccassionsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], OccassionsCrudResolver.prototype, "deleteManyOccassions", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Occassions_1.Occassions, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteOneOccassionsArgs_1.DeleteOneOccassionsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], OccassionsCrudResolver.prototype, "deleteOneOccassions", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Occassions_1.Occassions, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstOccassionsArgs_1.FindFirstOccassionsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], OccassionsCrudResolver.prototype, "findFirstOccassions", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [Occassions_1.Occassions], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindManyOccassionsArgs_1.FindManyOccassionsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], OccassionsCrudResolver.prototype, "findManyOccassions", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Occassions_1.Occassions, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueOccassionsArgs_1.FindUniqueOccassionsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], OccassionsCrudResolver.prototype, "findUniqueOccassions", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [OccassionsGroupBy_1.OccassionsGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupByOccassionsArgs_1.GroupByOccassionsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], OccassionsCrudResolver.prototype, "groupByOccassions", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateManyOccassionsArgs_1.UpdateManyOccassionsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], OccassionsCrudResolver.prototype, "updateManyOccassions", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Occassions_1.Occassions, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateOneOccassionsArgs_1.UpdateOneOccassionsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], OccassionsCrudResolver.prototype, "updateOneOccassions", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Occassions_1.Occassions, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpsertOneOccassionsArgs_1.UpsertOneOccassionsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], OccassionsCrudResolver.prototype, "upsertOneOccassions", null);
OccassionsCrudResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Occassions_1.Occassions)
], OccassionsCrudResolver);
exports.OccassionsCrudResolver = OccassionsCrudResolver;
