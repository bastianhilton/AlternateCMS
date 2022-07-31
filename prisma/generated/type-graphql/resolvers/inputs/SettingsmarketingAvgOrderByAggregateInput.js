"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SettingsmarketingAvgOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let SettingsmarketingAvgOrderByAggregateInput = class SettingsmarketingAvgOrderByAggregateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SettingsmarketingAvgOrderByAggregateInput.prototype, "id", void 0);
SettingsmarketingAvgOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("SettingsmarketingAvgOrderByAggregateInput", {
        isAbstract: true
    })
], SettingsmarketingAvgOrderByAggregateInput);
exports.SettingsmarketingAvgOrderByAggregateInput = SettingsmarketingAvgOrderByAggregateInput;
