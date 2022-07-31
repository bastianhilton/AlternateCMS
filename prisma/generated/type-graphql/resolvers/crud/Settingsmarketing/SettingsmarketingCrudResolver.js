"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SettingsmarketingCrudResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const AggregateSettingsmarketingArgs_1 = require("./args/AggregateSettingsmarketingArgs");
const CreateManySettingsmarketingArgs_1 = require("./args/CreateManySettingsmarketingArgs");
const CreateOneSettingsmarketingArgs_1 = require("./args/CreateOneSettingsmarketingArgs");
const DeleteManySettingsmarketingArgs_1 = require("./args/DeleteManySettingsmarketingArgs");
const DeleteOneSettingsmarketingArgs_1 = require("./args/DeleteOneSettingsmarketingArgs");
const FindFirstSettingsmarketingArgs_1 = require("./args/FindFirstSettingsmarketingArgs");
const FindManySettingsmarketingArgs_1 = require("./args/FindManySettingsmarketingArgs");
const FindUniqueSettingsmarketingArgs_1 = require("./args/FindUniqueSettingsmarketingArgs");
const GroupBySettingsmarketingArgs_1 = require("./args/GroupBySettingsmarketingArgs");
const UpdateManySettingsmarketingArgs_1 = require("./args/UpdateManySettingsmarketingArgs");
const UpdateOneSettingsmarketingArgs_1 = require("./args/UpdateOneSettingsmarketingArgs");
const UpsertOneSettingsmarketingArgs_1 = require("./args/UpsertOneSettingsmarketingArgs");
const helpers_1 = require("../../../helpers");
const Settingsmarketing_1 = require("../../../models/Settingsmarketing");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const AggregateSettingsmarketing_1 = require("../../outputs/AggregateSettingsmarketing");
const SettingsmarketingGroupBy_1 = require("../../outputs/SettingsmarketingGroupBy");
let SettingsmarketingCrudResolver = class SettingsmarketingCrudResolver {
    async aggregateSettingsmarketing(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).settingsmarketing.aggregate({
            ...args,
            ...(0, helpers_1.transformFields)((0, graphql_fields_1.default)(info)),
        });
    }
    async createManySettingsmarketing(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).settingsmarketing.createMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createOneSettingsmarketing(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).settingsmarketing.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteManySettingsmarketing(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).settingsmarketing.deleteMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteOneSettingsmarketing(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).settingsmarketing.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstSettingsmarketing(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).settingsmarketing.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async settingsmarketings(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).settingsmarketing.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async settingsmarketing(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).settingsmarketing.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async groupBySettingsmarketing(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).settingsmarketing.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
    async updateManySettingsmarketing(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).settingsmarketing.updateMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateOneSettingsmarketing(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).settingsmarketing.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async upsertOneSettingsmarketing(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).settingsmarketing.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateSettingsmarketing_1.AggregateSettingsmarketing, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateSettingsmarketingArgs_1.AggregateSettingsmarketingArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], SettingsmarketingCrudResolver.prototype, "aggregateSettingsmarketing", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateManySettingsmarketingArgs_1.CreateManySettingsmarketingArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], SettingsmarketingCrudResolver.prototype, "createManySettingsmarketing", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Settingsmarketing_1.Settingsmarketing, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateOneSettingsmarketingArgs_1.CreateOneSettingsmarketingArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], SettingsmarketingCrudResolver.prototype, "createOneSettingsmarketing", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteManySettingsmarketingArgs_1.DeleteManySettingsmarketingArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], SettingsmarketingCrudResolver.prototype, "deleteManySettingsmarketing", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Settingsmarketing_1.Settingsmarketing, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteOneSettingsmarketingArgs_1.DeleteOneSettingsmarketingArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], SettingsmarketingCrudResolver.prototype, "deleteOneSettingsmarketing", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Settingsmarketing_1.Settingsmarketing, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstSettingsmarketingArgs_1.FindFirstSettingsmarketingArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], SettingsmarketingCrudResolver.prototype, "findFirstSettingsmarketing", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [Settingsmarketing_1.Settingsmarketing], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindManySettingsmarketingArgs_1.FindManySettingsmarketingArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], SettingsmarketingCrudResolver.prototype, "settingsmarketings", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Settingsmarketing_1.Settingsmarketing, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueSettingsmarketingArgs_1.FindUniqueSettingsmarketingArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], SettingsmarketingCrudResolver.prototype, "settingsmarketing", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [SettingsmarketingGroupBy_1.SettingsmarketingGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupBySettingsmarketingArgs_1.GroupBySettingsmarketingArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], SettingsmarketingCrudResolver.prototype, "groupBySettingsmarketing", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateManySettingsmarketingArgs_1.UpdateManySettingsmarketingArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], SettingsmarketingCrudResolver.prototype, "updateManySettingsmarketing", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Settingsmarketing_1.Settingsmarketing, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateOneSettingsmarketingArgs_1.UpdateOneSettingsmarketingArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], SettingsmarketingCrudResolver.prototype, "updateOneSettingsmarketing", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Settingsmarketing_1.Settingsmarketing, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpsertOneSettingsmarketingArgs_1.UpsertOneSettingsmarketingArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], SettingsmarketingCrudResolver.prototype, "upsertOneSettingsmarketing", null);
SettingsmarketingCrudResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Settingsmarketing_1.Settingsmarketing)
], SettingsmarketingCrudResolver);
exports.SettingsmarketingCrudResolver = SettingsmarketingCrudResolver;
