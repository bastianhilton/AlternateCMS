"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SettingsgeneralOrderByRelevanceInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SettingsgeneralOrderByRelevanceFieldEnum_1 = require("../../enums/SettingsgeneralOrderByRelevanceFieldEnum");
const SortOrder_1 = require("../../enums/SortOrder");
let SettingsgeneralOrderByRelevanceInput = class SettingsgeneralOrderByRelevanceInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [SettingsgeneralOrderByRelevanceFieldEnum_1.SettingsgeneralOrderByRelevanceFieldEnum], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], SettingsgeneralOrderByRelevanceInput.prototype, "fields", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], SettingsgeneralOrderByRelevanceInput.prototype, "sort", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], SettingsgeneralOrderByRelevanceInput.prototype, "search", void 0);
SettingsgeneralOrderByRelevanceInput = tslib_1.__decorate([
    TypeGraphQL.InputType("SettingsgeneralOrderByRelevanceInput", {
        isAbstract: true
    })
], SettingsgeneralOrderByRelevanceInput);
exports.SettingsgeneralOrderByRelevanceInput = SettingsgeneralOrderByRelevanceInput;
