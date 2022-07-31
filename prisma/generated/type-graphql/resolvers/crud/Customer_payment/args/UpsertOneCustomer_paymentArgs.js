"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertOneCustomer_paymentArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Customer_paymentCreateInput_1 = require("../../../inputs/Customer_paymentCreateInput");
const Customer_paymentUpdateInput_1 = require("../../../inputs/Customer_paymentUpdateInput");
const Customer_paymentWhereUniqueInput_1 = require("../../../inputs/Customer_paymentWhereUniqueInput");
let UpsertOneCustomer_paymentArgs = class UpsertOneCustomer_paymentArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Customer_paymentWhereUniqueInput_1.Customer_paymentWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Customer_paymentWhereUniqueInput_1.Customer_paymentWhereUniqueInput)
], UpsertOneCustomer_paymentArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Customer_paymentCreateInput_1.Customer_paymentCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Customer_paymentCreateInput_1.Customer_paymentCreateInput)
], UpsertOneCustomer_paymentArgs.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Customer_paymentUpdateInput_1.Customer_paymentUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Customer_paymentUpdateInput_1.Customer_paymentUpdateInput)
], UpsertOneCustomer_paymentArgs.prototype, "update", void 0);
UpsertOneCustomer_paymentArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpsertOneCustomer_paymentArgs);
exports.UpsertOneCustomer_paymentArgs = UpsertOneCustomer_paymentArgs;
