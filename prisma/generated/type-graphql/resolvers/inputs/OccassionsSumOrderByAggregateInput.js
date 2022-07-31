"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OccassionsSumOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let OccassionsSumOrderByAggregateInput = class OccassionsSumOrderByAggregateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], OccassionsSumOrderByAggregateInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], OccassionsSumOrderByAggregateInput.prototype, "products", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], OccassionsSumOrderByAggregateInput.prototype, "wishlists", void 0);
OccassionsSumOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("OccassionsSumOrderByAggregateInput", {
        isAbstract: true
    })
], OccassionsSumOrderByAggregateInput);
exports.OccassionsSumOrderByAggregateInput = OccassionsSumOrderByAggregateInput;
