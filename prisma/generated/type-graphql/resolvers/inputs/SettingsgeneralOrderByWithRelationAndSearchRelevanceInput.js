"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SettingsgeneralOrderByWithRelationAndSearchRelevanceInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SettingsgeneralOrderByRelevanceInput_1 = require("../inputs/SettingsgeneralOrderByRelevanceInput");
const SortOrder_1 = require("../../enums/SortOrder");
let SettingsgeneralOrderByWithRelationAndSearchRelevanceInput = class SettingsgeneralOrderByWithRelationAndSearchRelevanceInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SettingsgeneralOrderByWithRelationAndSearchRelevanceInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SettingsgeneralOrderByWithRelationAndSearchRelevanceInput.prototype, "created_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SettingsgeneralOrderByWithRelationAndSearchRelevanceInput.prototype, "site_title", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SettingsgeneralOrderByWithRelationAndSearchRelevanceInput.prototype, "site_tagline", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SettingsgeneralOrderByWithRelationAndSearchRelevanceInput.prototype, "site_website", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SettingsgeneralOrderByWithRelationAndSearchRelevanceInput.prototype, "email", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SettingsgeneralOrderByWithRelationAndSearchRelevanceInput.prototype, "aws_s3", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SettingsgeneralOrderByWithRelationAndSearchRelevanceInput.prototype, "google_drive", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SettingsgeneralOrderByRelevanceInput_1.SettingsgeneralOrderByRelevanceInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SettingsgeneralOrderByRelevanceInput_1.SettingsgeneralOrderByRelevanceInput)
], SettingsgeneralOrderByWithRelationAndSearchRelevanceInput.prototype, "_relevance", void 0);
SettingsgeneralOrderByWithRelationAndSearchRelevanceInput = tslib_1.__decorate([
    TypeGraphQL.InputType("SettingsgeneralOrderByWithRelationAndSearchRelevanceInput", {
        isAbstract: true
    })
], SettingsgeneralOrderByWithRelationAndSearchRelevanceInput);
exports.SettingsgeneralOrderByWithRelationAndSearchRelevanceInput = SettingsgeneralOrderByWithRelationAndSearchRelevanceInput;
