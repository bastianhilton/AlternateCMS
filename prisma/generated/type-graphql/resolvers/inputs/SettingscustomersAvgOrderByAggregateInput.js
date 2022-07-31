"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SettingscustomersAvgOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let SettingscustomersAvgOrderByAggregateInput = class SettingscustomersAvgOrderByAggregateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SettingscustomersAvgOrderByAggregateInput.prototype, "id", void 0);
SettingscustomersAvgOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("SettingscustomersAvgOrderByAggregateInput", {
        isAbstract: true
    })
], SettingscustomersAvgOrderByAggregateInput);
exports.SettingscustomersAvgOrderByAggregateInput = SettingscustomersAvgOrderByAggregateInput;
