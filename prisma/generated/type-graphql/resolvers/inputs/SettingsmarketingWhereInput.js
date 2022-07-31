"use strict";
var SettingsmarketingWhereInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.SettingsmarketingWhereInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BigIntFilter_1 = require("../inputs/BigIntFilter");
const StringNullableFilter_1 = require("../inputs/StringNullableFilter");
let SettingsmarketingWhereInput = SettingsmarketingWhereInput_1 = class SettingsmarketingWhereInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [SettingsmarketingWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], SettingsmarketingWhereInput.prototype, "AND", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [SettingsmarketingWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], SettingsmarketingWhereInput.prototype, "OR", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [SettingsmarketingWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], SettingsmarketingWhereInput.prototype, "NOT", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BigIntFilter_1.BigIntFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BigIntFilter_1.BigIntFilter)
], SettingsmarketingWhereInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], SettingsmarketingWhereInput.prototype, "mail_port", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], SettingsmarketingWhereInput.prototype, "recaptcha_api", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], SettingsmarketingWhereInput.prototype, "adsense_api", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], SettingsmarketingWhereInput.prototype, "sitemap_url", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], SettingsmarketingWhereInput.prototype, "customer_data_lifetime", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], SettingsmarketingWhereInput.prototype, "mail_server", void 0);
SettingsmarketingWhereInput = SettingsmarketingWhereInput_1 = tslib_1.__decorate([
    TypeGraphQL.InputType("SettingsmarketingWhereInput", {
        isAbstract: true
    })
], SettingsmarketingWhereInput);
exports.SettingsmarketingWhereInput = SettingsmarketingWhereInput;
