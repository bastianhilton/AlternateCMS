"use strict";
var SettingshopWhereInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.SettingshopWhereInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BigIntFilter_1 = require("../inputs/BigIntFilter");
const StringNullableFilter_1 = require("../inputs/StringNullableFilter");
let SettingshopWhereInput = SettingshopWhereInput_1 = class SettingshopWhereInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [SettingshopWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], SettingshopWhereInput.prototype, "AND", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [SettingshopWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], SettingshopWhereInput.prototype, "OR", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [SettingshopWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], SettingshopWhereInput.prototype, "NOT", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BigIntFilter_1.BigIntFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BigIntFilter_1.BigIntFilter)
], SettingshopWhereInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], SettingshopWhereInput.prototype, "enable_product_assignment", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], SettingshopWhereInput.prototype, "product_videos", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], SettingshopWhereInput.prototype, "seller_payouts", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], SettingshopWhereInput.prototype, "admin_approval", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], SettingshopWhereInput.prototype, "enable_review_system", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], SettingshopWhereInput.prototype, "customer_rate_vendor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], SettingshopWhereInput.prototype, "multishipping", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], SettingshopWhereInput.prototype, "vendor_transaction_id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], SettingshopWhereInput.prototype, "enable_vendor_product_attribute", void 0);
SettingshopWhereInput = SettingshopWhereInput_1 = tslib_1.__decorate([
    TypeGraphQL.InputType("SettingshopWhereInput", {
        isAbstract: true
    })
], SettingshopWhereInput);
exports.SettingshopWhereInput = SettingshopWhereInput;
