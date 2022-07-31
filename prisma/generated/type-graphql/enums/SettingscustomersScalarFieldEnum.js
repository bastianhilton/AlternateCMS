"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SettingscustomersScalarFieldEnum = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var SettingscustomersScalarFieldEnum;
(function (SettingscustomersScalarFieldEnum) {
    SettingscustomersScalarFieldEnum["id"] = "id";
    SettingscustomersScalarFieldEnum["created_at"] = "created_at";
    SettingscustomersScalarFieldEnum["login_as_customer"] = "login_as_customer";
    SettingscustomersScalarFieldEnum["share_customer_accounts"] = "share_customer_accounts";
    SettingscustomersScalarFieldEnum["online_minutes_interval"] = "online_minutes_interval";
    SettingscustomersScalarFieldEnum["customer_data_lifetime"] = "customer_data_lifetime";
    SettingscustomersScalarFieldEnum["email_after_registration"] = "email_after_registration";
})(SettingscustomersScalarFieldEnum = exports.SettingscustomersScalarFieldEnum || (exports.SettingscustomersScalarFieldEnum = {}));
TypeGraphQL.registerEnumType(SettingscustomersScalarFieldEnum, {
    name: "SettingscustomersScalarFieldEnum",
    description: undefined,
});
