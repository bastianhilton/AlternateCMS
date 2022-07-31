"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SettingssalesAvgOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let SettingssalesAvgOrderByAggregateInput = class SettingssalesAvgOrderByAggregateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SettingssalesAvgOrderByAggregateInput.prototype, "id", void 0);
SettingssalesAvgOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("SettingssalesAvgOrderByAggregateInput", {
        isAbstract: true
    })
], SettingssalesAvgOrderByAggregateInput);
exports.SettingssalesAvgOrderByAggregateInput = SettingssalesAvgOrderByAggregateInput;
