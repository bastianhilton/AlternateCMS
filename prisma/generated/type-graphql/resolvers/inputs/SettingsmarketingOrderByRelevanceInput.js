"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SettingsmarketingOrderByRelevanceInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SettingsmarketingOrderByRelevanceFieldEnum_1 = require("../../enums/SettingsmarketingOrderByRelevanceFieldEnum");
const SortOrder_1 = require("../../enums/SortOrder");
let SettingsmarketingOrderByRelevanceInput = class SettingsmarketingOrderByRelevanceInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [SettingsmarketingOrderByRelevanceFieldEnum_1.SettingsmarketingOrderByRelevanceFieldEnum], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], SettingsmarketingOrderByRelevanceInput.prototype, "fields", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], SettingsmarketingOrderByRelevanceInput.prototype, "sort", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], SettingsmarketingOrderByRelevanceInput.prototype, "search", void 0);
SettingsmarketingOrderByRelevanceInput = tslib_1.__decorate([
    TypeGraphQL.InputType("SettingsmarketingOrderByRelevanceInput", {
        isAbstract: true
    })
], SettingsmarketingOrderByRelevanceInput);
exports.SettingsmarketingOrderByRelevanceInput = SettingsmarketingOrderByRelevanceInput;
