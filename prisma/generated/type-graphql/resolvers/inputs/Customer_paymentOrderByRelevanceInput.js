"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Customer_paymentOrderByRelevanceInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Customer_paymentOrderByRelevanceFieldEnum_1 = require("../../enums/Customer_paymentOrderByRelevanceFieldEnum");
const SortOrder_1 = require("../../enums/SortOrder");
let Customer_paymentOrderByRelevanceInput = class Customer_paymentOrderByRelevanceInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Customer_paymentOrderByRelevanceFieldEnum_1.Customer_paymentOrderByRelevanceFieldEnum], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], Customer_paymentOrderByRelevanceInput.prototype, "fields", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], Customer_paymentOrderByRelevanceInput.prototype, "sort", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], Customer_paymentOrderByRelevanceInput.prototype, "search", void 0);
Customer_paymentOrderByRelevanceInput = tslib_1.__decorate([
    TypeGraphQL.InputType("Customer_paymentOrderByRelevanceInput", {
        isAbstract: true
    })
], Customer_paymentOrderByRelevanceInput);
exports.Customer_paymentOrderByRelevanceInput = Customer_paymentOrderByRelevanceInput;
