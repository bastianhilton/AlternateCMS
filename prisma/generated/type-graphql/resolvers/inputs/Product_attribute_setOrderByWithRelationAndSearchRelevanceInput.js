"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product_attribute_setOrderByWithRelationAndSearchRelevanceInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Product_attribute_setOrderByRelevanceInput_1 = require("../inputs/Product_attribute_setOrderByRelevanceInput");
const SortOrder_1 = require("../../enums/SortOrder");
let Product_attribute_setOrderByWithRelationAndSearchRelevanceInput = class Product_attribute_setOrderByWithRelationAndSearchRelevanceInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Product_attribute_setOrderByWithRelationAndSearchRelevanceInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Product_attribute_setOrderByWithRelationAndSearchRelevanceInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Product_attribute_setOrderByWithRelationAndSearchRelevanceInput.prototype, "based_on", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Product_attribute_setOrderByWithRelationAndSearchRelevanceInput.prototype, "attribute_id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Product_attribute_setOrderByWithRelationAndSearchRelevanceInput.prototype, "product_attribute", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Product_attribute_setOrderByRelevanceInput_1.Product_attribute_setOrderByRelevanceInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Product_attribute_setOrderByRelevanceInput_1.Product_attribute_setOrderByRelevanceInput)
], Product_attribute_setOrderByWithRelationAndSearchRelevanceInput.prototype, "_relevance", void 0);
Product_attribute_setOrderByWithRelationAndSearchRelevanceInput = tslib_1.__decorate([
    TypeGraphQL.InputType("Product_attribute_setOrderByWithRelationAndSearchRelevanceInput", {
        isAbstract: true
    })
], Product_attribute_setOrderByWithRelationAndSearchRelevanceInput);
exports.Product_attribute_setOrderByWithRelationAndSearchRelevanceInput = Product_attribute_setOrderByWithRelationAndSearchRelevanceInput;
