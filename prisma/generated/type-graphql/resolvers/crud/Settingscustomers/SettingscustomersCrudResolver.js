"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SettingscustomersCrudResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const AggregateSettingscustomersArgs_1 = require("./args/AggregateSettingscustomersArgs");
const CreateManySettingscustomersArgs_1 = require("./args/CreateManySettingscustomersArgs");
const CreateOneSettingscustomersArgs_1 = require("./args/CreateOneSettingscustomersArgs");
const DeleteManySettingscustomersArgs_1 = require("./args/DeleteManySettingscustomersArgs");
const DeleteOneSettingscustomersArgs_1 = require("./args/DeleteOneSettingscustomersArgs");
const FindFirstSettingscustomersArgs_1 = require("./args/FindFirstSettingscustomersArgs");
const FindManySettingscustomersArgs_1 = require("./args/FindManySettingscustomersArgs");
const FindUniqueSettingscustomersArgs_1 = require("./args/FindUniqueSettingscustomersArgs");
const GroupBySettingscustomersArgs_1 = require("./args/GroupBySettingscustomersArgs");
const UpdateManySettingscustomersArgs_1 = require("./args/UpdateManySettingscustomersArgs");
const UpdateOneSettingscustomersArgs_1 = require("./args/UpdateOneSettingscustomersArgs");
const UpsertOneSettingscustomersArgs_1 = require("./args/UpsertOneSettingscustomersArgs");
const helpers_1 = require("../../../helpers");
const Settingscustomers_1 = require("../../../models/Settingscustomers");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const AggregateSettingscustomers_1 = require("../../outputs/AggregateSettingscustomers");
const SettingscustomersGroupBy_1 = require("../../outputs/SettingscustomersGroupBy");
let SettingscustomersCrudResolver = class SettingscustomersCrudResolver {
    async aggregateSettingscustomers(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).settingscustomers.aggregate({
            ...args,
            ...(0, helpers_1.transformFields)((0, graphql_fields_1.default)(info)),
        });
    }
    async createManySettingscustomers(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).settingscustomers.createMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createOneSettingscustomers(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).settingscustomers.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteManySettingscustomers(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).settingscustomers.deleteMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteOneSettingscustomers(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).settingscustomers.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstSettingscustomers(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).settingscustomers.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findManySettingscustomers(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).settingscustomers.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findUniqueSettingscustomers(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).settingscustomers.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async groupBySettingscustomers(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).settingscustomers.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
    async updateManySettingscustomers(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).settingscustomers.updateMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateOneSettingscustomers(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).settingscustomers.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async upsertOneSettingscustomers(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).settingscustomers.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateSettingscustomers_1.AggregateSettingscustomers, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateSettingscustomersArgs_1.AggregateSettingscustomersArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], SettingscustomersCrudResolver.prototype, "aggregateSettingscustomers", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateManySettingscustomersArgs_1.CreateManySettingscustomersArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], SettingscustomersCrudResolver.prototype, "createManySettingscustomers", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Settingscustomers_1.Settingscustomers, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateOneSettingscustomersArgs_1.CreateOneSettingscustomersArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], SettingscustomersCrudResolver.prototype, "createOneSettingscustomers", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteManySettingscustomersArgs_1.DeleteManySettingscustomersArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], SettingscustomersCrudResolver.prototype, "deleteManySettingscustomers", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Settingscustomers_1.Settingscustomers, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteOneSettingscustomersArgs_1.DeleteOneSettingscustomersArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], SettingscustomersCrudResolver.prototype, "deleteOneSettingscustomers", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Settingscustomers_1.Settingscustomers, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstSettingscustomersArgs_1.FindFirstSettingscustomersArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], SettingscustomersCrudResolver.prototype, "findFirstSettingscustomers", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [Settingscustomers_1.Settingscustomers], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindManySettingscustomersArgs_1.FindManySettingscustomersArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], SettingscustomersCrudResolver.prototype, "findManySettingscustomers", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Settingscustomers_1.Settingscustomers, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueSettingscustomersArgs_1.FindUniqueSettingscustomersArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], SettingscustomersCrudResolver.prototype, "findUniqueSettingscustomers", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [SettingscustomersGroupBy_1.SettingscustomersGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupBySettingscustomersArgs_1.GroupBySettingscustomersArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], SettingscustomersCrudResolver.prototype, "groupBySettingscustomers", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateManySettingscustomersArgs_1.UpdateManySettingscustomersArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], SettingscustomersCrudResolver.prototype, "updateManySettingscustomers", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Settingscustomers_1.Settingscustomers, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateOneSettingscustomersArgs_1.UpdateOneSettingscustomersArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], SettingscustomersCrudResolver.prototype, "updateOneSettingscustomers", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Settingscustomers_1.Settingscustomers, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpsertOneSettingscustomersArgs_1.UpsertOneSettingscustomersArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], SettingscustomersCrudResolver.prototype, "upsertOneSettingscustomers", null);
SettingscustomersCrudResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Settingscustomers_1.Settingscustomers)
], SettingscustomersCrudResolver);
exports.SettingscustomersCrudResolver = SettingscustomersCrudResolver;
