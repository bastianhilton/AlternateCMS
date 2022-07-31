"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SettingshopOrderByWithRelationAndSearchRelevanceInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SettingshopOrderByRelevanceInput_1 = require("../inputs/SettingshopOrderByRelevanceInput");
const SortOrder_1 = require("../../enums/SortOrder");
let SettingshopOrderByWithRelationAndSearchRelevanceInput = class SettingshopOrderByWithRelationAndSearchRelevanceInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SettingshopOrderByWithRelationAndSearchRelevanceInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SettingshopOrderByWithRelationAndSearchRelevanceInput.prototype, "enable_product_assignment", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SettingshopOrderByWithRelationAndSearchRelevanceInput.prototype, "product_videos", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SettingshopOrderByWithRelationAndSearchRelevanceInput.prototype, "seller_payouts", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SettingshopOrderByWithRelationAndSearchRelevanceInput.prototype, "admin_approval", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SettingshopOrderByWithRelationAndSearchRelevanceInput.prototype, "enable_review_system", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SettingshopOrderByWithRelationAndSearchRelevanceInput.prototype, "customer_rate_vendor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SettingshopOrderByWithRelationAndSearchRelevanceInput.prototype, "multishipping", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SettingshopOrderByWithRelationAndSearchRelevanceInput.prototype, "vendor_transaction_id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SettingshopOrderByWithRelationAndSearchRelevanceInput.prototype, "enable_vendor_product_attribute", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SettingshopOrderByRelevanceInput_1.SettingshopOrderByRelevanceInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SettingshopOrderByRelevanceInput_1.SettingshopOrderByRelevanceInput)
], SettingshopOrderByWithRelationAndSearchRelevanceInput.prototype, "_relevance", void 0);
SettingshopOrderByWithRelationAndSearchRelevanceInput = tslib_1.__decorate([
    TypeGraphQL.InputType("SettingshopOrderByWithRelationAndSearchRelevanceInput", {
        isAbstract: true
    })
], SettingshopOrderByWithRelationAndSearchRelevanceInput);
exports.SettingshopOrderByWithRelationAndSearchRelevanceInput = SettingshopOrderByWithRelationAndSearchRelevanceInput;
