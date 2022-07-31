"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Customer_paymentOrderByRelevanceFieldEnum = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var Customer_paymentOrderByRelevanceFieldEnum;
(function (Customer_paymentOrderByRelevanceFieldEnum) {
    Customer_paymentOrderByRelevanceFieldEnum["payment_info"] = "payment_info";
    Customer_paymentOrderByRelevanceFieldEnum["provider"] = "provider";
    Customer_paymentOrderByRelevanceFieldEnum["customers"] = "customers";
    Customer_paymentOrderByRelevanceFieldEnum["transactions"] = "transactions";
})(Customer_paymentOrderByRelevanceFieldEnum = exports.Customer_paymentOrderByRelevanceFieldEnum || (exports.Customer_paymentOrderByRelevanceFieldEnum = {}));
TypeGraphQL.registerEnumType(Customer_paymentOrderByRelevanceFieldEnum, {
    name: "Customer_paymentOrderByRelevanceFieldEnum",
    description: undefined,
});
