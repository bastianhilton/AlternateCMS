"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Customer_paymentCrudResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const AggregateCustomer_paymentArgs_1 = require("./args/AggregateCustomer_paymentArgs");
const CreateManyCustomer_paymentArgs_1 = require("./args/CreateManyCustomer_paymentArgs");
const CreateOneCustomer_paymentArgs_1 = require("./args/CreateOneCustomer_paymentArgs");
const DeleteManyCustomer_paymentArgs_1 = require("./args/DeleteManyCustomer_paymentArgs");
const DeleteOneCustomer_paymentArgs_1 = require("./args/DeleteOneCustomer_paymentArgs");
const FindFirstCustomer_paymentArgs_1 = require("./args/FindFirstCustomer_paymentArgs");
const FindManyCustomer_paymentArgs_1 = require("./args/FindManyCustomer_paymentArgs");
const FindUniqueCustomer_paymentArgs_1 = require("./args/FindUniqueCustomer_paymentArgs");
const GroupByCustomer_paymentArgs_1 = require("./args/GroupByCustomer_paymentArgs");
const UpdateManyCustomer_paymentArgs_1 = require("./args/UpdateManyCustomer_paymentArgs");
const UpdateOneCustomer_paymentArgs_1 = require("./args/UpdateOneCustomer_paymentArgs");
const UpsertOneCustomer_paymentArgs_1 = require("./args/UpsertOneCustomer_paymentArgs");
const helpers_1 = require("../../../helpers");
const Customer_payment_1 = require("../../../models/Customer_payment");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const AggregateCustomer_payment_1 = require("../../outputs/AggregateCustomer_payment");
const Customer_paymentGroupBy_1 = require("../../outputs/Customer_paymentGroupBy");
let Customer_paymentCrudResolver = class Customer_paymentCrudResolver {
    async aggregateCustomer_payment(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).customer_payment.aggregate({
            ...args,
            ...(0, helpers_1.transformFields)((0, graphql_fields_1.default)(info)),
        });
    }
    async createManyCustomer_payment(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).customer_payment.createMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createOneCustomer_payment(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).customer_payment.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteManyCustomer_payment(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).customer_payment.deleteMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteOneCustomer_payment(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).customer_payment.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstCustomer_payment(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).customer_payment.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async customer_payments(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).customer_payment.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async customer_payment(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).customer_payment.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async groupByCustomer_payment(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).customer_payment.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
    async updateManyCustomer_payment(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).customer_payment.updateMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateOneCustomer_payment(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).customer_payment.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async upsertOneCustomer_payment(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).customer_payment.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateCustomer_payment_1.AggregateCustomer_payment, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateCustomer_paymentArgs_1.AggregateCustomer_paymentArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], Customer_paymentCrudResolver.prototype, "aggregateCustomer_payment", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateManyCustomer_paymentArgs_1.CreateManyCustomer_paymentArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], Customer_paymentCrudResolver.prototype, "createManyCustomer_payment", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Customer_payment_1.Customer_payment, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateOneCustomer_paymentArgs_1.CreateOneCustomer_paymentArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], Customer_paymentCrudResolver.prototype, "createOneCustomer_payment", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteManyCustomer_paymentArgs_1.DeleteManyCustomer_paymentArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], Customer_paymentCrudResolver.prototype, "deleteManyCustomer_payment", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Customer_payment_1.Customer_payment, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteOneCustomer_paymentArgs_1.DeleteOneCustomer_paymentArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], Customer_paymentCrudResolver.prototype, "deleteOneCustomer_payment", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Customer_payment_1.Customer_payment, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstCustomer_paymentArgs_1.FindFirstCustomer_paymentArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], Customer_paymentCrudResolver.prototype, "findFirstCustomer_payment", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [Customer_payment_1.Customer_payment], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindManyCustomer_paymentArgs_1.FindManyCustomer_paymentArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], Customer_paymentCrudResolver.prototype, "customer_payments", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Customer_payment_1.Customer_payment, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueCustomer_paymentArgs_1.FindUniqueCustomer_paymentArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], Customer_paymentCrudResolver.prototype, "customer_payment", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [Customer_paymentGroupBy_1.Customer_paymentGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupByCustomer_paymentArgs_1.GroupByCustomer_paymentArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], Customer_paymentCrudResolver.prototype, "groupByCustomer_payment", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateManyCustomer_paymentArgs_1.UpdateManyCustomer_paymentArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], Customer_paymentCrudResolver.prototype, "updateManyCustomer_payment", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Customer_payment_1.Customer_payment, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateOneCustomer_paymentArgs_1.UpdateOneCustomer_paymentArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], Customer_paymentCrudResolver.prototype, "updateOneCustomer_payment", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Customer_payment_1.Customer_payment, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpsertOneCustomer_paymentArgs_1.UpsertOneCustomer_paymentArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], Customer_paymentCrudResolver.prototype, "upsertOneCustomer_payment", null);
Customer_paymentCrudResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Customer_payment_1.Customer_payment)
], Customer_paymentCrudResolver);
exports.Customer_paymentCrudResolver = Customer_paymentCrudResolver;
