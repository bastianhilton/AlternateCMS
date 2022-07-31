"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SettingscustomersOrderByRelevanceFieldEnum = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var SettingscustomersOrderByRelevanceFieldEnum;
(function (SettingscustomersOrderByRelevanceFieldEnum) {
    SettingscustomersOrderByRelevanceFieldEnum["login_as_customer"] = "login_as_customer";
    SettingscustomersOrderByRelevanceFieldEnum["share_customer_accounts"] = "share_customer_accounts";
    SettingscustomersOrderByRelevanceFieldEnum["online_minutes_interval"] = "online_minutes_interval";
    SettingscustomersOrderByRelevanceFieldEnum["customer_data_lifetime"] = "customer_data_lifetime";
    SettingscustomersOrderByRelevanceFieldEnum["email_after_registration"] = "email_after_registration";
})(SettingscustomersOrderByRelevanceFieldEnum = exports.SettingscustomersOrderByRelevanceFieldEnum || (exports.SettingscustomersOrderByRelevanceFieldEnum = {}));
TypeGraphQL.registerEnumType(SettingscustomersOrderByRelevanceFieldEnum, {
    name: "SettingscustomersOrderByRelevanceFieldEnum",
    description: undefined,
});
