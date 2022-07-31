"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product_attribute_setOrderByRelevanceInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Product_attribute_setOrderByRelevanceFieldEnum_1 = require("../../enums/Product_attribute_setOrderByRelevanceFieldEnum");
const SortOrder_1 = require("../../enums/SortOrder");
let Product_attribute_setOrderByRelevanceInput = class Product_attribute_setOrderByRelevanceInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Product_attribute_setOrderByRelevanceFieldEnum_1.Product_attribute_setOrderByRelevanceFieldEnum], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], Product_attribute_setOrderByRelevanceInput.prototype, "fields", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], Product_attribute_setOrderByRelevanceInput.prototype, "sort", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], Product_attribute_setOrderByRelevanceInput.prototype, "search", void 0);
Product_attribute_setOrderByRelevanceInput = tslib_1.__decorate([
    TypeGraphQL.InputType("Product_attribute_setOrderByRelevanceInput", {
        isAbstract: true
    })
], Product_attribute_setOrderByRelevanceInput);
exports.Product_attribute_setOrderByRelevanceInput = Product_attribute_setOrderByRelevanceInput;
