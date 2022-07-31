"use strict";
var SettingsgeneralWhereInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.SettingsgeneralWhereInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BigIntFilter_1 = require("../inputs/BigIntFilter");
const DateTimeNullableFilter_1 = require("../inputs/DateTimeNullableFilter");
const StringNullableFilter_1 = require("../inputs/StringNullableFilter");
let SettingsgeneralWhereInput = SettingsgeneralWhereInput_1 = class SettingsgeneralWhereInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [SettingsgeneralWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], SettingsgeneralWhereInput.prototype, "AND", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [SettingsgeneralWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], SettingsgeneralWhereInput.prototype, "OR", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [SettingsgeneralWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], SettingsgeneralWhereInput.prototype, "NOT", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BigIntFilter_1.BigIntFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BigIntFilter_1.BigIntFilter)
], SettingsgeneralWhereInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeNullableFilter_1.DateTimeNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeNullableFilter_1.DateTimeNullableFilter)
], SettingsgeneralWhereInput.prototype, "created_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], SettingsgeneralWhereInput.prototype, "site_title", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], SettingsgeneralWhereInput.prototype, "site_tagline", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], SettingsgeneralWhereInput.prototype, "site_website", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], SettingsgeneralWhereInput.prototype, "email", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], SettingsgeneralWhereInput.prototype, "aws_s3", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], SettingsgeneralWhereInput.prototype, "google_drive", void 0);
SettingsgeneralWhereInput = SettingsgeneralWhereInput_1 = tslib_1.__decorate([
    TypeGraphQL.InputType("SettingsgeneralWhereInput", {
        isAbstract: true
    })
], SettingsgeneralWhereInput);
exports.SettingsgeneralWhereInput = SettingsgeneralWhereInput;
