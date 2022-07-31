"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OccassionsOrderByWithAggregationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const OccassionsAvgOrderByAggregateInput_1 = require("../inputs/OccassionsAvgOrderByAggregateInput");
const OccassionsCountOrderByAggregateInput_1 = require("../inputs/OccassionsCountOrderByAggregateInput");
const OccassionsMaxOrderByAggregateInput_1 = require("../inputs/OccassionsMaxOrderByAggregateInput");
const OccassionsMinOrderByAggregateInput_1 = require("../inputs/OccassionsMinOrderByAggregateInput");
const OccassionsSumOrderByAggregateInput_1 = require("../inputs/OccassionsSumOrderByAggregateInput");
const SortOrder_1 = require("../../enums/SortOrder");
let OccassionsOrderByWithAggregationInput = class OccassionsOrderByWithAggregationInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], OccassionsOrderByWithAggregationInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], OccassionsOrderByWithAggregationInput.prototype, "created_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], OccassionsOrderByWithAggregationInput.prototype, "code", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], OccassionsOrderByWithAggregationInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], OccassionsOrderByWithAggregationInput.prototype, "category", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], OccassionsOrderByWithAggregationInput.prototype, "tags", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], OccassionsOrderByWithAggregationInput.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], OccassionsOrderByWithAggregationInput.prototype, "products", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], OccassionsOrderByWithAggregationInput.prototype, "wishlists", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], OccassionsOrderByWithAggregationInput.prototype, "products_occassionsToproducts", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], OccassionsOrderByWithAggregationInput.prototype, "wishlists_occassionsTowishlists", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OccassionsCountOrderByAggregateInput_1.OccassionsCountOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OccassionsCountOrderByAggregateInput_1.OccassionsCountOrderByAggregateInput)
], OccassionsOrderByWithAggregationInput.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OccassionsAvgOrderByAggregateInput_1.OccassionsAvgOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OccassionsAvgOrderByAggregateInput_1.OccassionsAvgOrderByAggregateInput)
], OccassionsOrderByWithAggregationInput.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OccassionsMaxOrderByAggregateInput_1.OccassionsMaxOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OccassionsMaxOrderByAggregateInput_1.OccassionsMaxOrderByAggregateInput)
], OccassionsOrderByWithAggregationInput.prototype, "_max", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OccassionsMinOrderByAggregateInput_1.OccassionsMinOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OccassionsMinOrderByAggregateInput_1.OccassionsMinOrderByAggregateInput)
], OccassionsOrderByWithAggregationInput.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OccassionsSumOrderByAggregateInput_1.OccassionsSumOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OccassionsSumOrderByAggregateInput_1.OccassionsSumOrderByAggregateInput)
], OccassionsOrderByWithAggregationInput.prototype, "_sum", void 0);
OccassionsOrderByWithAggregationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("OccassionsOrderByWithAggregationInput", {
        isAbstract: true
    })
], OccassionsOrderByWithAggregationInput);
exports.OccassionsOrderByWithAggregationInput = OccassionsOrderByWithAggregationInput;
