"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SettingscustomersOrderByWithRelationAndSearchRelevanceInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SettingscustomersOrderByRelevanceInput_1 = require("../inputs/SettingscustomersOrderByRelevanceInput");
const SortOrder_1 = require("../../enums/SortOrder");
let SettingscustomersOrderByWithRelationAndSearchRelevanceInput = class SettingscustomersOrderByWithRelationAndSearchRelevanceInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SettingscustomersOrderByWithRelationAndSearchRelevanceInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SettingscustomersOrderByWithRelationAndSearchRelevanceInput.prototype, "created_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SettingscustomersOrderByWithRelationAndSearchRelevanceInput.prototype, "login_as_customer", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SettingscustomersOrderByWithRelationAndSearchRelevanceInput.prototype, "share_customer_accounts", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SettingscustomersOrderByWithRelationAndSearchRelevanceInput.prototype, "online_minutes_interval", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SettingscustomersOrderByWithRelationAndSearchRelevanceInput.prototype, "customer_data_lifetime", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SettingscustomersOrderByWithRelationAndSearchRelevanceInput.prototype, "email_after_registration", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SettingscustomersOrderByRelevanceInput_1.SettingscustomersOrderByRelevanceInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SettingscustomersOrderByRelevanceInput_1.SettingscustomersOrderByRelevanceInput)
], SettingscustomersOrderByWithRelationAndSearchRelevanceInput.prototype, "_relevance", void 0);
SettingscustomersOrderByWithRelationAndSearchRelevanceInput = tslib_1.__decorate([
    TypeGraphQL.InputType("SettingscustomersOrderByWithRelationAndSearchRelevanceInput", {
        isAbstract: true
    })
], SettingscustomersOrderByWithRelationAndSearchRelevanceInput);
exports.SettingscustomersOrderByWithRelationAndSearchRelevanceInput = SettingscustomersOrderByWithRelationAndSearchRelevanceInput;
