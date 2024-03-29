"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.General_settingsCrudResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const AggregateGeneral_settingsArgs_1 = require("./args/AggregateGeneral_settingsArgs");
const CreateManyGeneral_settingsArgs_1 = require("./args/CreateManyGeneral_settingsArgs");
const CreateOneGeneral_settingsArgs_1 = require("./args/CreateOneGeneral_settingsArgs");
const DeleteManyGeneral_settingsArgs_1 = require("./args/DeleteManyGeneral_settingsArgs");
const DeleteOneGeneral_settingsArgs_1 = require("./args/DeleteOneGeneral_settingsArgs");
const FindFirstGeneral_settingsArgs_1 = require("./args/FindFirstGeneral_settingsArgs");
const FindManyGeneral_settingsArgs_1 = require("./args/FindManyGeneral_settingsArgs");
const FindUniqueGeneral_settingsArgs_1 = require("./args/FindUniqueGeneral_settingsArgs");
const GroupByGeneral_settingsArgs_1 = require("./args/GroupByGeneral_settingsArgs");
const UpdateManyGeneral_settingsArgs_1 = require("./args/UpdateManyGeneral_settingsArgs");
const UpdateOneGeneral_settingsArgs_1 = require("./args/UpdateOneGeneral_settingsArgs");
const UpsertOneGeneral_settingsArgs_1 = require("./args/UpsertOneGeneral_settingsArgs");
const helpers_1 = require("../../../helpers");
const General_settings_1 = require("../../../models/General_settings");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const AggregateGeneral_settings_1 = require("../../outputs/AggregateGeneral_settings");
const General_settingsGroupBy_1 = require("../../outputs/General_settingsGroupBy");
let General_settingsCrudResolver = class General_settingsCrudResolver {
    async aggregateGeneral_settings(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).general_settings.aggregate({
            ...args,
            ...(0, helpers_1.transformFields)((0, graphql_fields_1.default)(info)),
        });
    }
    async createManyGeneral_settings(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).general_settings.createMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createOneGeneral_settings(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).general_settings.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteManyGeneral_settings(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).general_settings.deleteMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteOneGeneral_settings(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).general_settings.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstGeneral_settings(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).general_settings.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findManyGeneral_settings(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).general_settings.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findUniqueGeneral_settings(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).general_settings.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async groupByGeneral_settings(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).general_settings.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
    async updateManyGeneral_settings(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).general_settings.updateMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateOneGeneral_settings(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).general_settings.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async upsertOneGeneral_settings(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).general_settings.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateGeneral_settings_1.AggregateGeneral_settings, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateGeneral_settingsArgs_1.AggregateGeneral_settingsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], General_settingsCrudResolver.prototype, "aggregateGeneral_settings", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateManyGeneral_settingsArgs_1.CreateManyGeneral_settingsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], General_settingsCrudResolver.prototype, "createManyGeneral_settings", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => General_settings_1.General_settings, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateOneGeneral_settingsArgs_1.CreateOneGeneral_settingsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], General_settingsCrudResolver.prototype, "createOneGeneral_settings", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteManyGeneral_settingsArgs_1.DeleteManyGeneral_settingsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], General_settingsCrudResolver.prototype, "deleteManyGeneral_settings", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => General_settings_1.General_settings, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteOneGeneral_settingsArgs_1.DeleteOneGeneral_settingsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], General_settingsCrudResolver.prototype, "deleteOneGeneral_settings", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => General_settings_1.General_settings, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstGeneral_settingsArgs_1.FindFirstGeneral_settingsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], General_settingsCrudResolver.prototype, "findFirstGeneral_settings", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [General_settings_1.General_settings], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindManyGeneral_settingsArgs_1.FindManyGeneral_settingsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], General_settingsCrudResolver.prototype, "findManyGeneral_settings", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => General_settings_1.General_settings, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueGeneral_settingsArgs_1.FindUniqueGeneral_settingsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], General_settingsCrudResolver.prototype, "findUniqueGeneral_settings", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [General_settingsGroupBy_1.General_settingsGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupByGeneral_settingsArgs_1.GroupByGeneral_settingsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], General_settingsCrudResolver.prototype, "groupByGeneral_settings", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateManyGeneral_settingsArgs_1.UpdateManyGeneral_settingsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], General_settingsCrudResolver.prototype, "updateManyGeneral_settings", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => General_settings_1.General_settings, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateOneGeneral_settingsArgs_1.UpdateOneGeneral_settingsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], General_settingsCrudResolver.prototype, "updateOneGeneral_settings", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => General_settings_1.General_settings, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpsertOneGeneral_settingsArgs_1.UpsertOneGeneral_settingsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], General_settingsCrudResolver.prototype, "upsertOneGeneral_settings", null);
General_settingsCrudResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => General_settings_1.General_settings)
], General_settingsCrudResolver);
exports.General_settingsCrudResolver = General_settingsCrudResolver;
