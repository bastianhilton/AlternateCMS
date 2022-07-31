"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShopsOrderByRelevanceInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ShopsOrderByRelevanceFieldEnum_1 = require("../../enums/ShopsOrderByRelevanceFieldEnum");
const SortOrder_1 = require("../../enums/SortOrder");
let ShopsOrderByRelevanceInput = class ShopsOrderByRelevanceInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ShopsOrderByRelevanceFieldEnum_1.ShopsOrderByRelevanceFieldEnum], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], ShopsOrderByRelevanceInput.prototype, "fields", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], ShopsOrderByRelevanceInput.prototype, "sort", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], ShopsOrderByRelevanceInput.prototype, "search", void 0);
ShopsOrderByRelevanceInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ShopsOrderByRelevanceInput", {
        isAbstract: true
    })
], ShopsOrderByRelevanceInput);
exports.ShopsOrderByRelevanceInput = ShopsOrderByRelevanceInput;
