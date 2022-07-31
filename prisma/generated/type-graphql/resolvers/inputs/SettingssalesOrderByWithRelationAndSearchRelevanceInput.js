"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SettingssalesOrderByWithRelationAndSearchRelevanceInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SettingssalesOrderByRelevanceInput_1 = require("../inputs/SettingssalesOrderByRelevanceInput");
const SortOrder_1 = require("../../enums/SortOrder");
let SettingssalesOrderByWithRelationAndSearchRelevanceInput = class SettingssalesOrderByWithRelationAndSearchRelevanceInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SettingssalesOrderByWithRelationAndSearchRelevanceInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SettingssalesOrderByWithRelationAndSearchRelevanceInput.prototype, "created_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SettingssalesOrderByWithRelationAndSearchRelevanceInput.prototype, "analytics_account_type", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SettingssalesOrderByWithRelationAndSearchRelevanceInput.prototype, "analytics_account_number", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SettingssalesOrderByWithRelationAndSearchRelevanceInput.prototype, "analytics_anonymizeip", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SettingssalesOrderByWithRelationAndSearchRelevanceInput.prototype, "analytics_content_experiments", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SettingssalesOrderByWithRelationAndSearchRelevanceInput.prototype, "adwords_conversionid", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SettingssalesOrderByWithRelationAndSearchRelevanceInput.prototype, "adwords_conversionlanguage", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SettingssalesOrderByWithRelationAndSearchRelevanceInput.prototype, "adwords_conversionformat", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SettingssalesOrderByWithRelationAndSearchRelevanceInput.prototype, "adwords_conversioncolor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SettingssalesOrderByWithRelationAndSearchRelevanceInput.prototype, "adwords_conversionlabel", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SettingssalesOrderByWithRelationAndSearchRelevanceInput.prototype, "adwords_conversionvalue_type", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SettingssalesOrderByWithRelationAndSearchRelevanceInput.prototype, "adwords_sendorder", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SettingssalesOrderByWithRelationAndSearchRelevanceInput.prototype, "tag_manager_anonymizeip", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SettingssalesOrderByWithRelationAndSearchRelevanceInput.prototype, "tag_manager_contentexperiments", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SettingssalesOrderByWithRelationAndSearchRelevanceInput.prototype, "tag_manager_containerid", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SettingssalesOrderByRelevanceInput_1.SettingssalesOrderByRelevanceInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SettingssalesOrderByRelevanceInput_1.SettingssalesOrderByRelevanceInput)
], SettingssalesOrderByWithRelationAndSearchRelevanceInput.prototype, "_relevance", void 0);
SettingssalesOrderByWithRelationAndSearchRelevanceInput = tslib_1.__decorate([
    TypeGraphQL.InputType("SettingssalesOrderByWithRelationAndSearchRelevanceInput", {
        isAbstract: true
    })
], SettingssalesOrderByWithRelationAndSearchRelevanceInput);
exports.SettingssalesOrderByWithRelationAndSearchRelevanceInput = SettingssalesOrderByWithRelationAndSearchRelevanceInput;
