"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SettingsmarketingGroupBy = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const GraphQLScalars = tslib_1.__importStar(require("graphql-scalars"));
const SettingsmarketingAvgAggregate_1 = require("../outputs/SettingsmarketingAvgAggregate");
const SettingsmarketingCountAggregate_1 = require("../outputs/SettingsmarketingCountAggregate");
const SettingsmarketingMaxAggregate_1 = require("../outputs/SettingsmarketingMaxAggregate");
const SettingsmarketingMinAggregate_1 = require("../outputs/SettingsmarketingMinAggregate");
const SettingsmarketingSumAggregate_1 = require("../outputs/SettingsmarketingSumAggregate");
let SettingsmarketingGroupBy = class SettingsmarketingGroupBy {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", typeof BigInt === "function" ? BigInt : Object)
], SettingsmarketingGroupBy.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SettingsmarketingGroupBy.prototype, "mail_port", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SettingsmarketingGroupBy.prototype, "recaptcha_api", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SettingsmarketingGroupBy.prototype, "adsense_api", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SettingsmarketingGroupBy.prototype, "sitemap_url", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SettingsmarketingGroupBy.prototype, "customer_data_lifetime", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SettingsmarketingGroupBy.prototype, "mail_server", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SettingsmarketingCountAggregate_1.SettingsmarketingCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SettingsmarketingCountAggregate_1.SettingsmarketingCountAggregate)
], SettingsmarketingGroupBy.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SettingsmarketingAvgAggregate_1.SettingsmarketingAvgAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SettingsmarketingAvgAggregate_1.SettingsmarketingAvgAggregate)
], SettingsmarketingGroupBy.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SettingsmarketingSumAggregate_1.SettingsmarketingSumAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SettingsmarketingSumAggregate_1.SettingsmarketingSumAggregate)
], SettingsmarketingGroupBy.prototype, "_sum", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SettingsmarketingMinAggregate_1.SettingsmarketingMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SettingsmarketingMinAggregate_1.SettingsmarketingMinAggregate)
], SettingsmarketingGroupBy.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SettingsmarketingMaxAggregate_1.SettingsmarketingMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SettingsmarketingMaxAggregate_1.SettingsmarketingMaxAggregate)
], SettingsmarketingGroupBy.prototype, "_max", void 0);
SettingsmarketingGroupBy = tslib_1.__decorate([
    TypeGraphQL.ObjectType("SettingsmarketingGroupBy", {
        isAbstract: true
    })
], SettingsmarketingGroupBy);
exports.SettingsmarketingGroupBy = SettingsmarketingGroupBy;
