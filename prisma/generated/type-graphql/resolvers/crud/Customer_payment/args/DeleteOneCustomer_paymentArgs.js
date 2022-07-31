"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteOneCustomer_paymentArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Customer_paymentWhereUniqueInput_1 = require("../../../inputs/Customer_paymentWhereUniqueInput");
let DeleteOneCustomer_paymentArgs = class DeleteOneCustomer_paymentArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Customer_paymentWhereUniqueInput_1.Customer_paymentWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Customer_paymentWhereUniqueInput_1.Customer_paymentWhereUniqueInput)
], DeleteOneCustomer_paymentArgs.prototype, "where", void 0);
DeleteOneCustomer_paymentArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteOneCustomer_paymentArgs);
exports.DeleteOneCustomer_paymentArgs = DeleteOneCustomer_paymentArgs;
