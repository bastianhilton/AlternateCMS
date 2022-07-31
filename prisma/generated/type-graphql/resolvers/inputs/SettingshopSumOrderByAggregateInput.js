"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SettingshopSumOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let SettingshopSumOrderByAggregateInput = class SettingshopSumOrderByAggregateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SettingshopSumOrderByAggregateInput.prototype, "id", void 0);
SettingshopSumOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("SettingshopSumOrderByAggregateInput", {
        isAbstract: true
    })
], SettingshopSumOrderByAggregateInput);
exports.SettingshopSumOrderByAggregateInput = SettingshopSumOrderByAggregateInput;
