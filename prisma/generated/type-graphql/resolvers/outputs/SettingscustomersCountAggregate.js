"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SettingscustomersCountAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let SettingscustomersCountAggregate = class SettingscustomersCountAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], SettingscustomersCountAggregate.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], SettingscustomersCountAggregate.prototype, "created_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], SettingscustomersCountAggregate.prototype, "login_as_customer", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], SettingscustomersCountAggregate.prototype, "share_customer_accounts", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], SettingscustomersCountAggregate.prototype, "online_minutes_interval", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], SettingscustomersCountAggregate.prototype, "customer_data_lifetime", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], SettingscustomersCountAggregate.prototype, "email_after_registration", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], SettingscustomersCountAggregate.prototype, "_all", void 0);
SettingscustomersCountAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("SettingscustomersCountAggregate", {
        isAbstract: true
    })
], SettingscustomersCountAggregate);
exports.SettingscustomersCountAggregate = SettingscustomersCountAggregate;
