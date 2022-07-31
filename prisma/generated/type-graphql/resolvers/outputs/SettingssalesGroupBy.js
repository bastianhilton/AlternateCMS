"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SettingssalesGroupBy = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const GraphQLScalars = tslib_1.__importStar(require("graphql-scalars"));
const SettingssalesAvgAggregate_1 = require("../outputs/SettingssalesAvgAggregate");
const SettingssalesCountAggregate_1 = require("../outputs/SettingssalesCountAggregate");
const SettingssalesMaxAggregate_1 = require("../outputs/SettingssalesMaxAggregate");
const SettingssalesMinAggregate_1 = require("../outputs/SettingssalesMinAggregate");
const SettingssalesSumAggregate_1 = require("../outputs/SettingssalesSumAggregate");
let SettingssalesGroupBy = class SettingssalesGroupBy {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", typeof BigInt === "function" ? BigInt : Object)
], SettingssalesGroupBy.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], SettingssalesGroupBy.prototype, "created_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SettingssalesGroupBy.prototype, "analytics_account_type", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SettingssalesGroupBy.prototype, "analytics_account_number", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SettingssalesGroupBy.prototype, "analytics_anonymizeip", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SettingssalesGroupBy.prototype, "analytics_content_experiments", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SettingssalesGroupBy.prototype, "adwords_conversionid", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SettingssalesGroupBy.prototype, "adwords_conversionlanguage", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SettingssalesGroupBy.prototype, "adwords_conversionformat", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SettingssalesGroupBy.prototype, "adwords_conversioncolor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SettingssalesGroupBy.prototype, "adwords_conversionlabel", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SettingssalesGroupBy.prototype, "adwords_conversionvalue_type", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SettingssalesGroupBy.prototype, "adwords_sendorder", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SettingssalesGroupBy.prototype, "tag_manager_anonymizeip", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SettingssalesGroupBy.prototype, "tag_manager_contentexperiments", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SettingssalesGroupBy.prototype, "tag_manager_containerid", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SettingssalesCountAggregate_1.SettingssalesCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SettingssalesCountAggregate_1.SettingssalesCountAggregate)
], SettingssalesGroupBy.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SettingssalesAvgAggregate_1.SettingssalesAvgAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SettingssalesAvgAggregate_1.SettingssalesAvgAggregate)
], SettingssalesGroupBy.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SettingssalesSumAggregate_1.SettingssalesSumAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SettingssalesSumAggregate_1.SettingssalesSumAggregate)
], SettingssalesGroupBy.prototype, "_sum", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SettingssalesMinAggregate_1.SettingssalesMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SettingssalesMinAggregate_1.SettingssalesMinAggregate)
], SettingssalesGroupBy.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SettingssalesMaxAggregate_1.SettingssalesMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SettingssalesMaxAggregate_1.SettingssalesMaxAggregate)
], SettingssalesGroupBy.prototype, "_max", void 0);
SettingssalesGroupBy = tslib_1.__decorate([
    TypeGraphQL.ObjectType("SettingssalesGroupBy", {
        isAbstract: true
    })
], SettingssalesGroupBy);
exports.SettingssalesGroupBy = SettingssalesGroupBy;
