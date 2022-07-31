"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateOneCustomer_paymentArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Customer_paymentUpdateInput_1 = require("../../../inputs/Customer_paymentUpdateInput");
const Customer_paymentWhereUniqueInput_1 = require("../../../inputs/Customer_paymentWhereUniqueInput");
let UpdateOneCustomer_paymentArgs = class UpdateOneCustomer_paymentArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Customer_paymentUpdateInput_1.Customer_paymentUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Customer_paymentUpdateInput_1.Customer_paymentUpdateInput)
], UpdateOneCustomer_paymentArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Customer_paymentWhereUniqueInput_1.Customer_paymentWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Customer_paymentWhereUniqueInput_1.Customer_paymentWhereUniqueInput)
], UpdateOneCustomer_paymentArgs.prototype, "where", void 0);
UpdateOneCustomer_paymentArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateOneCustomer_paymentArgs);
exports.UpdateOneCustomer_paymentArgs = UpdateOneCustomer_paymentArgs;
