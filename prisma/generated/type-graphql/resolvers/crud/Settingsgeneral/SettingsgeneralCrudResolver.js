"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SettingsgeneralCrudResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const AggregateSettingsgeneralArgs_1 = require("./args/AggregateSettingsgeneralArgs");
const CreateManySettingsgeneralArgs_1 = require("./args/CreateManySettingsgeneralArgs");
const CreateOneSettingsgeneralArgs_1 = require("./args/CreateOneSettingsgeneralArgs");
const DeleteManySettingsgeneralArgs_1 = require("./args/DeleteManySettingsgeneralArgs");
const DeleteOneSettingsgeneralArgs_1 = require("./args/DeleteOneSettingsgeneralArgs");
const FindFirstSettingsgeneralArgs_1 = require("./args/FindFirstSettingsgeneralArgs");
const FindManySettingsgeneralArgs_1 = require("./args/FindManySettingsgeneralArgs");
const FindUniqueSettingsgeneralArgs_1 = require("./args/FindUniqueSettingsgeneralArgs");
const GroupBySettingsgeneralArgs_1 = require("./args/GroupBySettingsgeneralArgs");
const UpdateManySettingsgeneralArgs_1 = require("./args/UpdateManySettingsgeneralArgs");
const UpdateOneSettingsgeneralArgs_1 = require("./args/UpdateOneSettingsgeneralArgs");
const UpsertOneSettingsgeneralArgs_1 = require("./args/UpsertOneSettingsgeneralArgs");
const helpers_1 = require("../../../helpers");
const Settingsgeneral_1 = require("../../../models/Settingsgeneral");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const AggregateSettingsgeneral_1 = require("../../outputs/AggregateSettingsgeneral");
const SettingsgeneralGroupBy_1 = require("../../outputs/SettingsgeneralGroupBy");
let SettingsgeneralCrudResolver = class SettingsgeneralCrudResolver {
    async aggregateSettingsgeneral(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).settingsgeneral.aggregate({
            ...args,
            ...(0, helpers_1.transformFields)((0, graphql_fields_1.default)(info)),
        });
    }
    async createManySettingsgeneral(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).settingsgeneral.createMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createOneSettingsgeneral(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).settingsgeneral.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteManySettingsgeneral(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).settingsgeneral.deleteMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteOneSettingsgeneral(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).settingsgeneral.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstSettingsgeneral(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).settingsgeneral.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async settingsgenerals(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).settingsgeneral.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async settingsgeneral(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).settingsgeneral.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async groupBySettingsgeneral(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).settingsgeneral.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
    async updateManySettingsgeneral(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).settingsgeneral.updateMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateOneSettingsgeneral(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).settingsgeneral.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async upsertOneSettingsgeneral(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).settingsgeneral.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateSettingsgeneral_1.AggregateSettingsgeneral, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateSettingsgeneralArgs_1.AggregateSettingsgeneralArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], SettingsgeneralCrudResolver.prototype, "aggregateSettingsgeneral", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateManySettingsgeneralArgs_1.CreateManySettingsgeneralArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], SettingsgeneralCrudResolver.prototype, "createManySettingsgeneral", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Settingsgeneral_1.Settingsgeneral, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateOneSettingsgeneralArgs_1.CreateOneSettingsgeneralArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], SettingsgeneralCrudResolver.prototype, "createOneSettingsgeneral", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteManySettingsgeneralArgs_1.DeleteManySettingsgeneralArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], SettingsgeneralCrudResolver.prototype, "deleteManySettingsgeneral", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Settingsgeneral_1.Settingsgeneral, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteOneSettingsgeneralArgs_1.DeleteOneSettingsgeneralArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], SettingsgeneralCrudResolver.prototype, "deleteOneSettingsgeneral", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Settingsgeneral_1.Settingsgeneral, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstSettingsgeneralArgs_1.FindFirstSettingsgeneralArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], SettingsgeneralCrudResolver.prototype, "findFirstSettingsgeneral", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [Settingsgeneral_1.Settingsgeneral], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindManySettingsgeneralArgs_1.FindManySettingsgeneralArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], SettingsgeneralCrudResolver.prototype, "settingsgenerals", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Settingsgeneral_1.Settingsgeneral, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueSettingsgeneralArgs_1.FindUniqueSettingsgeneralArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], SettingsgeneralCrudResolver.prototype, "settingsgeneral", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [SettingsgeneralGroupBy_1.SettingsgeneralGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupBySettingsgeneralArgs_1.GroupBySettingsgeneralArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], SettingsgeneralCrudResolver.prototype, "groupBySettingsgeneral", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateManySettingsgeneralArgs_1.UpdateManySettingsgeneralArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], SettingsgeneralCrudResolver.prototype, "updateManySettingsgeneral", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Settingsgeneral_1.Settingsgeneral, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateOneSettingsgeneralArgs_1.UpdateOneSettingsgeneralArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], SettingsgeneralCrudResolver.prototype, "updateOneSettingsgeneral", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Settingsgeneral_1.Settingsgeneral, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpsertOneSettingsgeneralArgs_1.UpsertOneSettingsgeneralArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], SettingsgeneralCrudResolver.prototype, "upsertOneSettingsgeneral", null);
SettingsgeneralCrudResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Settingsgeneral_1.Settingsgeneral)
], SettingsgeneralCrudResolver);
exports.SettingsgeneralCrudResolver = SettingsgeneralCrudResolver;
