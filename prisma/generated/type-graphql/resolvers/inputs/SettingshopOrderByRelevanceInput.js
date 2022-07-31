"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SettingshopOrderByRelevanceInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SettingshopOrderByRelevanceFieldEnum_1 = require("../../enums/SettingshopOrderByRelevanceFieldEnum");
const SortOrder_1 = require("../../enums/SortOrder");
let SettingshopOrderByRelevanceInput = class SettingshopOrderByRelevanceInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [SettingshopOrderByRelevanceFieldEnum_1.SettingshopOrderByRelevanceFieldEnum], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], SettingshopOrderByRelevanceInput.prototype, "fields", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], SettingshopOrderByRelevanceInput.prototype, "sort", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], SettingshopOrderByRelevanceInput.prototype, "search", void 0);
SettingshopOrderByRelevanceInput = tslib_1.__decorate([
    TypeGraphQL.InputType("SettingshopOrderByRelevanceInput", {
        isAbstract: true
    })
], SettingshopOrderByRelevanceInput);
exports.SettingshopOrderByRelevanceInput = SettingshopOrderByRelevanceInput;
