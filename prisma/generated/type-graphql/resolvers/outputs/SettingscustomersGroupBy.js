"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SettingscustomersGroupBy = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const GraphQLScalars = tslib_1.__importStar(require("graphql-scalars"));
const SettingscustomersAvgAggregate_1 = require("../outputs/SettingscustomersAvgAggregate");
const SettingscustomersCountAggregate_1 = require("../outputs/SettingscustomersCountAggregate");
const SettingscustomersMaxAggregate_1 = require("../outputs/SettingscustomersMaxAggregate");
const SettingscustomersMinAggregate_1 = require("../outputs/SettingscustomersMinAggregate");
const SettingscustomersSumAggregate_1 = require("../outputs/SettingscustomersSumAggregate");
let SettingscustomersGroupBy = class SettingscustomersGroupBy {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", typeof BigInt === "function" ? BigInt : Object)
], SettingscustomersGroupBy.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], SettingscustomersGroupBy.prototype, "created_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SettingscustomersGroupBy.prototype, "login_as_customer", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SettingscustomersGroupBy.prototype, "share_customer_accounts", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SettingscustomersGroupBy.prototype, "online_minutes_interval", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SettingscustomersGroupBy.prototype, "customer_data_lifetime", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SettingscustomersGroupBy.prototype, "email_after_registration", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SettingscustomersCountAggregate_1.SettingscustomersCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SettingscustomersCountAggregate_1.SettingscustomersCountAggregate)
], SettingscustomersGroupBy.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SettingscustomersAvgAggregate_1.SettingscustomersAvgAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SettingscustomersAvgAggregate_1.SettingscustomersAvgAggregate)
], SettingscustomersGroupBy.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SettingscustomersSumAggregate_1.SettingscustomersSumAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SettingscustomersSumAggregate_1.SettingscustomersSumAggregate)
], SettingscustomersGroupBy.prototype, "_sum", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SettingscustomersMinAggregate_1.SettingscustomersMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SettingscustomersMinAggregate_1.SettingscustomersMinAggregate)
], SettingscustomersGroupBy.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SettingscustomersMaxAggregate_1.SettingscustomersMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SettingscustomersMaxAggregate_1.SettingscustomersMaxAggregate)
], SettingscustomersGroupBy.prototype, "_max", void 0);
SettingscustomersGroupBy = tslib_1.__decorate([
    TypeGraphQL.ObjectType("SettingscustomersGroupBy", {
        isAbstract: true
    })
], SettingscustomersGroupBy);
exports.SettingscustomersGroupBy = SettingscustomersGroupBy;
