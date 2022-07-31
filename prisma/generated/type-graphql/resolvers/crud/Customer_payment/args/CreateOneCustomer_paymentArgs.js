"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateOneCustomer_paymentArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Customer_paymentCreateInput_1 = require("../../../inputs/Customer_paymentCreateInput");
let CreateOneCustomer_paymentArgs = class CreateOneCustomer_paymentArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Customer_paymentCreateInput_1.Customer_paymentCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Customer_paymentCreateInput_1.Customer_paymentCreateInput)
], CreateOneCustomer_paymentArgs.prototype, "data", void 0);
CreateOneCustomer_paymentArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateOneCustomer_paymentArgs);
exports.CreateOneCustomer_paymentArgs = CreateOneCustomer_paymentArgs;
