"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SettingsmarketingSumOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let SettingsmarketingSumOrderByAggregateInput = class SettingsmarketingSumOrderByAggregateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SettingsmarketingSumOrderByAggregateInput.prototype, "id", void 0);
SettingsmarketingSumOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("SettingsmarketingSumOrderByAggregateInput", {
        isAbstract: true
    })
], SettingsmarketingSumOrderByAggregateInput);
exports.SettingsmarketingSumOrderByAggregateInput = SettingsmarketingSumOrderByAggregateInput;
