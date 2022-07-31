"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OccassionsAvgOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let OccassionsAvgOrderByAggregateInput = class OccassionsAvgOrderByAggregateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], OccassionsAvgOrderByAggregateInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], OccassionsAvgOrderByAggregateInput.prototype, "products", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], OccassionsAvgOrderByAggregateInput.prototype, "wishlists", void 0);
OccassionsAvgOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("OccassionsAvgOrderByAggregateInput", {
        isAbstract: true
    })
], OccassionsAvgOrderByAggregateInput);
exports.OccassionsAvgOrderByAggregateInput = OccassionsAvgOrderByAggregateInput;
