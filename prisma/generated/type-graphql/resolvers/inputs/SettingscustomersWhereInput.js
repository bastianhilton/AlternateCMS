"use strict";
var SettingscustomersWhereInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.SettingscustomersWhereInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BigIntFilter_1 = require("../inputs/BigIntFilter");
const DateTimeNullableFilter_1 = require("../inputs/DateTimeNullableFilter");
const StringNullableFilter_1 = require("../inputs/StringNullableFilter");
let SettingscustomersWhereInput = SettingscustomersWhereInput_1 = class SettingscustomersWhereInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [SettingscustomersWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], SettingscustomersWhereInput.prototype, "AND", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [SettingscustomersWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], SettingscustomersWhereInput.prototype, "OR", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [SettingscustomersWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], SettingscustomersWhereInput.prototype, "NOT", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BigIntFilter_1.BigIntFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BigIntFilter_1.BigIntFilter)
], SettingscustomersWhereInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeNullableFilter_1.DateTimeNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeNullableFilter_1.DateTimeNullableFilter)
], SettingscustomersWhereInput.prototype, "created_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], SettingscustomersWhereInput.prototype, "login_as_customer", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], SettingscustomersWhereInput.prototype, "share_customer_accounts", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], SettingscustomersWhereInput.prototype, "online_minutes_interval", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], SettingscustomersWhereInput.prototype, "customer_data_lifetime", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], SettingscustomersWhereInput.prototype, "email_after_registration", void 0);
SettingscustomersWhereInput = SettingscustomersWhereInput_1 = tslib_1.__decorate([
    TypeGraphQL.InputType("SettingscustomersWhereInput", {
        isAbstract: true
    })
], SettingscustomersWhereInput);
exports.SettingscustomersWhereInput = SettingscustomersWhereInput;
