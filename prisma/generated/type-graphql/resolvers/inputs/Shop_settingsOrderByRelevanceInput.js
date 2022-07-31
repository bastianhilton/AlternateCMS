"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Shop_settingsOrderByRelevanceInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Shop_settingsOrderByRelevanceFieldEnum_1 = require("../../enums/Shop_settingsOrderByRelevanceFieldEnum");
const SortOrder_1 = require("../../enums/SortOrder");
let Shop_settingsOrderByRelevanceInput = class Shop_settingsOrderByRelevanceInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Shop_settingsOrderByRelevanceFieldEnum_1.Shop_settingsOrderByRelevanceFieldEnum], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], Shop_settingsOrderByRelevanceInput.prototype, "fields", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], Shop_settingsOrderByRelevanceInput.prototype, "sort", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], Shop_settingsOrderByRelevanceInput.prototype, "search", void 0);
Shop_settingsOrderByRelevanceInput = tslib_1.__decorate([
    TypeGraphQL.InputType("Shop_settingsOrderByRelevanceInput", {
        isAbstract: true
    })
], Shop_settingsOrderByRelevanceInput);
exports.Shop_settingsOrderByRelevanceInput = Shop_settingsOrderByRelevanceInput;
