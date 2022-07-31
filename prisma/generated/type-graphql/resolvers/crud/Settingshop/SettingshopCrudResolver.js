"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SettingshopCrudResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const AggregateSettingshopArgs_1 = require("./args/AggregateSettingshopArgs");
const CreateManySettingshopArgs_1 = require("./args/CreateManySettingshopArgs");
const CreateOneSettingshopArgs_1 = require("./args/CreateOneSettingshopArgs");
const DeleteManySettingshopArgs_1 = require("./args/DeleteManySettingshopArgs");
const DeleteOneSettingshopArgs_1 = require("./args/DeleteOneSettingshopArgs");
const FindFirstSettingshopArgs_1 = require("./args/FindFirstSettingshopArgs");
const FindManySettingshopArgs_1 = require("./args/FindManySettingshopArgs");
const FindUniqueSettingshopArgs_1 = require("./args/FindUniqueSettingshopArgs");
const GroupBySettingshopArgs_1 = require("./args/GroupBySettingshopArgs");
const UpdateManySettingshopArgs_1 = require("./args/UpdateManySettingshopArgs");
const UpdateOneSettingshopArgs_1 = require("./args/UpdateOneSettingshopArgs");
const UpsertOneSettingshopArgs_1 = require("./args/UpsertOneSettingshopArgs");
const helpers_1 = require("../../../helpers");
const Settingshop_1 = require("../../../models/Settingshop");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const AggregateSettingshop_1 = require("../../outputs/AggregateSettingshop");
const SettingshopGroupBy_1 = require("../../outputs/SettingshopGroupBy");
let SettingshopCrudResolver = class SettingshopCrudResolver {
    async aggregateSettingshop(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).settingshop.aggregate({
            ...args,
            ...(0, helpers_1.transformFields)((0, graphql_fields_1.default)(info)),
        });
    }
    async createManySettingshop(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).settingshop.createMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createOneSettingshop(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).settingshop.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteManySettingshop(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).settingshop.deleteMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteOneSettingshop(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).settingshop.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstSettingshop(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).settingshop.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async settingshops(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).settingshop.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async settingshop(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).settingshop.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async groupBySettingshop(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).settingshop.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
    async updateManySettingshop(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).settingshop.updateMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateOneSettingshop(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).settingshop.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async upsertOneSettingshop(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).settingshop.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateSettingshop_1.AggregateSettingshop, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateSettingshopArgs_1.AggregateSettingshopArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], SettingshopCrudResolver.prototype, "aggregateSettingshop", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateManySettingshopArgs_1.CreateManySettingshopArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], SettingshopCrudResolver.prototype, "createManySettingshop", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Settingshop_1.Settingshop, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateOneSettingshopArgs_1.CreateOneSettingshopArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], SettingshopCrudResolver.prototype, "createOneSettingshop", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteManySettingshopArgs_1.DeleteManySettingshopArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], SettingshopCrudResolver.prototype, "deleteManySettingshop", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Settingshop_1.Settingshop, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteOneSettingshopArgs_1.DeleteOneSettingshopArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], SettingshopCrudResolver.prototype, "deleteOneSettingshop", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Settingshop_1.Settingshop, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstSettingshopArgs_1.FindFirstSettingshopArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], SettingshopCrudResolver.prototype, "findFirstSettingshop", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [Settingshop_1.Settingshop], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindManySettingshopArgs_1.FindManySettingshopArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], SettingshopCrudResolver.prototype, "settingshops", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Settingshop_1.Settingshop, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueSettingshopArgs_1.FindUniqueSettingshopArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], SettingshopCrudResolver.prototype, "settingshop", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [SettingshopGroupBy_1.SettingshopGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupBySettingshopArgs_1.GroupBySettingshopArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], SettingshopCrudResolver.prototype, "groupBySettingshop", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateManySettingshopArgs_1.UpdateManySettingshopArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], SettingshopCrudResolver.prototype, "updateManySettingshop", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Settingshop_1.Settingshop, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateOneSettingshopArgs_1.UpdateOneSettingshopArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], SettingshopCrudResolver.prototype, "updateOneSettingshop", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Settingshop_1.Settingshop, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpsertOneSettingshopArgs_1.UpsertOneSettingshopArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], SettingshopCrudResolver.prototype, "upsertOneSettingshop", null);
SettingshopCrudResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Settingshop_1.Settingshop)
], SettingshopCrudResolver);
exports.SettingshopCrudResolver = SettingshopCrudResolver;
