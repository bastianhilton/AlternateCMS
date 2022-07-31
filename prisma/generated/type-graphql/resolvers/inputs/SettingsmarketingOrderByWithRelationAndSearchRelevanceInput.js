"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SettingsmarketingOrderByWithRelationAndSearchRelevanceInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SettingsmarketingOrderByRelevanceInput_1 = require("../inputs/SettingsmarketingOrderByRelevanceInput");
const SortOrder_1 = require("../../enums/SortOrder");
let SettingsmarketingOrderByWithRelationAndSearchRelevanceInput = class SettingsmarketingOrderByWithRelationAndSearchRelevanceInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SettingsmarketingOrderByWithRelationAndSearchRelevanceInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SettingsmarketingOrderByWithRelationAndSearchRelevanceInput.prototype, "mail_port", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SettingsmarketingOrderByWithRelationAndSearchRelevanceInput.prototype, "recaptcha_api", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SettingsmarketingOrderByWithRelationAndSearchRelevanceInput.prototype, "adsense_api", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SettingsmarketingOrderByWithRelationAndSearchRelevanceInput.prototype, "sitemap_url", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SettingsmarketingOrderByWithRelationAndSearchRelevanceInput.prototype, "customer_data_lifetime", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SettingsmarketingOrderByWithRelationAndSearchRelevanceInput.prototype, "mail_server", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SettingsmarketingOrderByRelevanceInput_1.SettingsmarketingOrderByRelevanceInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SettingsmarketingOrderByRelevanceInput_1.SettingsmarketingOrderByRelevanceInput)
], SettingsmarketingOrderByWithRelationAndSearchRelevanceInput.prototype, "_relevance", void 0);
SettingsmarketingOrderByWithRelationAndSearchRelevanceInput = tslib_1.__decorate([
    TypeGraphQL.InputType("SettingsmarketingOrderByWithRelationAndSearchRelevanceInput", {
        isAbstract: true
    })
], SettingsmarketingOrderByWithRelationAndSearchRelevanceInput);
exports.SettingsmarketingOrderByWithRelationAndSearchRelevanceInput = SettingsmarketingOrderByWithRelationAndSearchRelevanceInput;
