"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SettingscustomersCreateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const GraphQLScalars = tslib_1.__importStar(require("graphql-scalars"));
let SettingscustomersCreateInput = class SettingscustomersCreateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", typeof BigInt === "function" ? BigInt : Object)
], SettingscustomersCreateInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], SettingscustomersCreateInput.prototype, "created_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SettingscustomersCreateInput.prototype, "login_as_customer", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SettingscustomersCreateInput.prototype, "share_customer_accounts", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SettingscustomersCreateInput.prototype, "online_minutes_interval", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SettingscustomersCreateInput.prototype, "customer_data_lifetime", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SettingscustomersCreateInput.prototype, "email_after_registration", void 0);
SettingscustomersCreateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("SettingscustomersCreateInput", {
        isAbstract: true
    })
], SettingscustomersCreateInput);
exports.SettingscustomersCreateInput = SettingscustomersCreateInput;
