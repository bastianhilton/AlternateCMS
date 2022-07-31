"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SettingscustomersOrderByRelevanceInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SettingscustomersOrderByRelevanceFieldEnum_1 = require("../../enums/SettingscustomersOrderByRelevanceFieldEnum");
const SortOrder_1 = require("../../enums/SortOrder");
let SettingscustomersOrderByRelevanceInput = class SettingscustomersOrderByRelevanceInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [SettingscustomersOrderByRelevanceFieldEnum_1.SettingscustomersOrderByRelevanceFieldEnum], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], SettingscustomersOrderByRelevanceInput.prototype, "fields", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], SettingscustomersOrderByRelevanceInput.prototype, "sort", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], SettingscustomersOrderByRelevanceInput.prototype, "search", void 0);
SettingscustomersOrderByRelevanceInput = tslib_1.__decorate([
    TypeGraphQL.InputType("SettingscustomersOrderByRelevanceInput", {
        isAbstract: true
    })
], SettingscustomersOrderByRelevanceInput);
exports.SettingscustomersOrderByRelevanceInput = SettingscustomersOrderByRelevanceInput;
