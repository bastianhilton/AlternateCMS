"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product_attributeOrderByRelevanceInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Product_attributeOrderByRelevanceFieldEnum_1 = require("../../enums/Product_attributeOrderByRelevanceFieldEnum");
const SortOrder_1 = require("../../enums/SortOrder");
let Product_attributeOrderByRelevanceInput = class Product_attributeOrderByRelevanceInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Product_attributeOrderByRelevanceFieldEnum_1.Product_attributeOrderByRelevanceFieldEnum], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], Product_attributeOrderByRelevanceInput.prototype, "fields", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], Product_attributeOrderByRelevanceInput.prototype, "sort", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], Product_attributeOrderByRelevanceInput.prototype, "search", void 0);
Product_attributeOrderByRelevanceInput = tslib_1.__decorate([
    TypeGraphQL.InputType("Product_attributeOrderByRelevanceInput", {
        isAbstract: true
    })
], Product_attributeOrderByRelevanceInput);
exports.Product_attributeOrderByRelevanceInput = Product_attributeOrderByRelevanceInput;
