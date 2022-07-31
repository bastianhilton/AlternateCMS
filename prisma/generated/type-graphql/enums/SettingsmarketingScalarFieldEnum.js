"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SettingsmarketingScalarFieldEnum = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var SettingsmarketingScalarFieldEnum;
(function (SettingsmarketingScalarFieldEnum) {
    SettingsmarketingScalarFieldEnum["id"] = "id";
    SettingsmarketingScalarFieldEnum["mail_port"] = "mail_port";
    SettingsmarketingScalarFieldEnum["recaptcha_api"] = "recaptcha_api";
    SettingsmarketingScalarFieldEnum["adsense_api"] = "adsense_api";
    SettingsmarketingScalarFieldEnum["sitemap_url"] = "sitemap_url";
    SettingsmarketingScalarFieldEnum["customer_data_lifetime"] = "customer_data_lifetime";
    SettingsmarketingScalarFieldEnum["mail_server"] = "mail_server";
})(SettingsmarketingScalarFieldEnum = exports.SettingsmarketingScalarFieldEnum || (exports.SettingsmarketingScalarFieldEnum = {}));
TypeGraphQL.registerEnumType(SettingsmarketingScalarFieldEnum, {
    name: "SettingsmarketingScalarFieldEnum",
    description: undefined,
});
