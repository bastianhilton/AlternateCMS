"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SettingssalesCrudResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const AggregateSettingssalesArgs_1 = require("./args/AggregateSettingssalesArgs");
const CreateManySettingssalesArgs_1 = require("./args/CreateManySettingssalesArgs");
const CreateOneSettingssalesArgs_1 = require("./args/CreateOneSettingssalesArgs");
const DeleteManySettingssalesArgs_1 = require("./args/DeleteManySettingssalesArgs");
const DeleteOneSettingssalesArgs_1 = require("./args/DeleteOneSettingssalesArgs");
const FindFirstSettingssalesArgs_1 = require("./args/FindFirstSettingssalesArgs");
const FindManySettingssalesArgs_1 = require("./args/FindManySettingssalesArgs");
const FindUniqueSettingssalesArgs_1 = require("./args/FindUniqueSettingssalesArgs");
const GroupBySettingssalesArgs_1 = require("./args/GroupBySettingssalesArgs");
const UpdateManySettingssalesArgs_1 = require("./args/UpdateManySettingssalesArgs");
const UpdateOneSettingssalesArgs_1 = require("./args/UpdateOneSettingssalesArgs");
const UpsertOneSettingssalesArgs_1 = require("./args/UpsertOneSettingssalesArgs");
const helpers_1 = require("../../../helpers");
const Settingssales_1 = require("../../../models/Settingssales");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const AggregateSettingssales_1 = require("../../outputs/AggregateSettingssales");
const SettingssalesGroupBy_1 = require("../../outputs/SettingssalesGroupBy");
let SettingssalesCrudResolver = class SettingssalesCrudResolver {
    async aggregateSettingssales(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).settingssales.aggregate({
            ...args,
            ...(0, helpers_1.transformFields)((0, graphql_fields_1.default)(info)),
        });
    }
    async createManySettingssales(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).settingssales.createMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createOneSettingssales(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).settingssales.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteManySettingssales(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).settingssales.deleteMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteOneSettingssales(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).settingssales.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstSettingssales(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).settingssales.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findManySettingssales(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).settingssales.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findUniqueSettingssales(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).settingssales.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async groupBySettingssales(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).settingssales.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
    async updateManySettingssales(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).settingssales.updateMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateOneSettingssales(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).settingssales.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async upsertOneSettingssales(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).settingssales.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateSettingssales_1.AggregateSettingssales, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateSettingssalesArgs_1.AggregateSettingssalesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], SettingssalesCrudResolver.prototype, "aggregateSettingssales", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateManySettingssalesArgs_1.CreateManySettingssalesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], SettingssalesCrudResolver.prototype, "createManySettingssales", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Settingssales_1.Settingssales, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateOneSettingssalesArgs_1.CreateOneSettingssalesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], SettingssalesCrudResolver.prototype, "createOneSettingssales", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteManySettingssalesArgs_1.DeleteManySettingssalesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], SettingssalesCrudResolver.prototype, "deleteManySettingssales", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Settingssales_1.Settingssales, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteOneSettingssalesArgs_1.DeleteOneSettingssalesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], SettingssalesCrudResolver.prototype, "deleteOneSettingssales", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Settingssales_1.Settingssales, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstSettingssalesArgs_1.FindFirstSettingssalesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], SettingssalesCrudResolver.prototype, "findFirstSettingssales", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [Settingssales_1.Settingssales], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindManySettingssalesArgs_1.FindManySettingssalesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], SettingssalesCrudResolver.prototype, "findManySettingssales", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Settingssales_1.Settingssales, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueSettingssalesArgs_1.FindUniqueSettingssalesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], SettingssalesCrudResolver.prototype, "findUniqueSettingssales", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [SettingssalesGroupBy_1.SettingssalesGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupBySettingssalesArgs_1.GroupBySettingssalesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], SettingssalesCrudResolver.prototype, "groupBySettingssales", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateManySettingssalesArgs_1.UpdateManySettingssalesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], SettingssalesCrudResolver.prototype, "updateManySettingssales", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Settingssales_1.Settingssales, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateOneSettingssalesArgs_1.UpdateOneSettingssalesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], SettingssalesCrudResolver.prototype, "updateOneSettingssales", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Settingssales_1.Settingssales, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpsertOneSettingssalesArgs_1.UpsertOneSettingssalesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], SettingssalesCrudResolver.prototype, "upsertOneSettingssales", null);
SettingssalesCrudResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Settingssales_1.Settingssales)
], SettingssalesCrudResolver);
exports.SettingssalesCrudResolver = SettingssalesCrudResolver;
