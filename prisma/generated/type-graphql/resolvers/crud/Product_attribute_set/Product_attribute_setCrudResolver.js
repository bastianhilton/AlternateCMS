"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product_attribute_setCrudResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const AggregateProduct_attribute_setArgs_1 = require("./args/AggregateProduct_attribute_setArgs");
const CreateManyProduct_attribute_setArgs_1 = require("./args/CreateManyProduct_attribute_setArgs");
const CreateOneProduct_attribute_setArgs_1 = require("./args/CreateOneProduct_attribute_setArgs");
const DeleteManyProduct_attribute_setArgs_1 = require("./args/DeleteManyProduct_attribute_setArgs");
const DeleteOneProduct_attribute_setArgs_1 = require("./args/DeleteOneProduct_attribute_setArgs");
const FindFirstProduct_attribute_setArgs_1 = require("./args/FindFirstProduct_attribute_setArgs");
const FindManyProduct_attribute_setArgs_1 = require("./args/FindManyProduct_attribute_setArgs");
const FindUniqueProduct_attribute_setArgs_1 = require("./args/FindUniqueProduct_attribute_setArgs");
const GroupByProduct_attribute_setArgs_1 = require("./args/GroupByProduct_attribute_setArgs");
const UpdateManyProduct_attribute_setArgs_1 = require("./args/UpdateManyProduct_attribute_setArgs");
const UpdateOneProduct_attribute_setArgs_1 = require("./args/UpdateOneProduct_attribute_setArgs");
const UpsertOneProduct_attribute_setArgs_1 = require("./args/UpsertOneProduct_attribute_setArgs");
const helpers_1 = require("../../../helpers");
const Product_attribute_set_1 = require("../../../models/Product_attribute_set");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const AggregateProduct_attribute_set_1 = require("../../outputs/AggregateProduct_attribute_set");
const Product_attribute_setGroupBy_1 = require("../../outputs/Product_attribute_setGroupBy");
let Product_attribute_setCrudResolver = class Product_attribute_setCrudResolver {
    async aggregateProduct_attribute_set(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).product_attribute_set.aggregate({
            ...args,
            ...(0, helpers_1.transformFields)((0, graphql_fields_1.default)(info)),
        });
    }
    async createManyProduct_attribute_set(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).product_attribute_set.createMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createOneProduct_attribute_set(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).product_attribute_set.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteManyProduct_attribute_set(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).product_attribute_set.deleteMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteOneProduct_attribute_set(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).product_attribute_set.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstProduct_attribute_set(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).product_attribute_set.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async product_attribute_sets(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).product_attribute_set.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async product_attribute_set(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).product_attribute_set.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async groupByProduct_attribute_set(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).product_attribute_set.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
    async updateManyProduct_attribute_set(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).product_attribute_set.updateMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateOneProduct_attribute_set(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).product_attribute_set.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async upsertOneProduct_attribute_set(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).product_attribute_set.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateProduct_attribute_set_1.AggregateProduct_attribute_set, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateProduct_attribute_setArgs_1.AggregateProduct_attribute_setArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], Product_attribute_setCrudResolver.prototype, "aggregateProduct_attribute_set", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateManyProduct_attribute_setArgs_1.CreateManyProduct_attribute_setArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], Product_attribute_setCrudResolver.prototype, "createManyProduct_attribute_set", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Product_attribute_set_1.Product_attribute_set, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateOneProduct_attribute_setArgs_1.CreateOneProduct_attribute_setArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], Product_attribute_setCrudResolver.prototype, "createOneProduct_attribute_set", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteManyProduct_attribute_setArgs_1.DeleteManyProduct_attribute_setArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], Product_attribute_setCrudResolver.prototype, "deleteManyProduct_attribute_set", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Product_attribute_set_1.Product_attribute_set, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteOneProduct_attribute_setArgs_1.DeleteOneProduct_attribute_setArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], Product_attribute_setCrudResolver.prototype, "deleteOneProduct_attribute_set", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Product_attribute_set_1.Product_attribute_set, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstProduct_attribute_setArgs_1.FindFirstProduct_attribute_setArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], Product_attribute_setCrudResolver.prototype, "findFirstProduct_attribute_set", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [Product_attribute_set_1.Product_attribute_set], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindManyProduct_attribute_setArgs_1.FindManyProduct_attribute_setArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], Product_attribute_setCrudResolver.prototype, "product_attribute_sets", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Product_attribute_set_1.Product_attribute_set, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueProduct_attribute_setArgs_1.FindUniqueProduct_attribute_setArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], Product_attribute_setCrudResolver.prototype, "product_attribute_set", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [Product_attribute_setGroupBy_1.Product_attribute_setGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupByProduct_attribute_setArgs_1.GroupByProduct_attribute_setArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], Product_attribute_setCrudResolver.prototype, "groupByProduct_attribute_set", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateManyProduct_attribute_setArgs_1.UpdateManyProduct_attribute_setArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], Product_attribute_setCrudResolver.prototype, "updateManyProduct_attribute_set", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Product_attribute_set_1.Product_attribute_set, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateOneProduct_attribute_setArgs_1.UpdateOneProduct_attribute_setArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], Product_attribute_setCrudResolver.prototype, "updateOneProduct_attribute_set", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Product_attribute_set_1.Product_attribute_set, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpsertOneProduct_attribute_setArgs_1.UpsertOneProduct_attribute_setArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], Product_attribute_setCrudResolver.prototype, "upsertOneProduct_attribute_set", null);
Product_attribute_setCrudResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Product_attribute_set_1.Product_attribute_set)
], Product_attribute_setCrudResolver);
exports.Product_attribute_setCrudResolver = Product_attribute_setCrudResolver;
