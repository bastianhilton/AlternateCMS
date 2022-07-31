"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SettingssalesSumOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let SettingssalesSumOrderByAggregateInput = class SettingssalesSumOrderByAggregateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SettingssalesSumOrderByAggregateInput.prototype, "id", void 0);
SettingssalesSumOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("SettingssalesSumOrderByAggregateInput", {
        isAbstract: true
    })
], SettingssalesSumOrderByAggregateInput);
exports.SettingssalesSumOrderByAggregateInput = SettingssalesSumOrderByAggregateInput;
