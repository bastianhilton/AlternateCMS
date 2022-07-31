"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SettingscustomersSumOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let SettingscustomersSumOrderByAggregateInput = class SettingscustomersSumOrderByAggregateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SettingscustomersSumOrderByAggregateInput.prototype, "id", void 0);
SettingscustomersSumOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("SettingscustomersSumOrderByAggregateInput", {
        isAbstract: true
    })
], SettingscustomersSumOrderByAggregateInput);
exports.SettingscustomersSumOrderByAggregateInput = SettingscustomersSumOrderByAggregateInput;
