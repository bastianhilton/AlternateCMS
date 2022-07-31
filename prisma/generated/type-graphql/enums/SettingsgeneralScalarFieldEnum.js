"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SettingsgeneralScalarFieldEnum = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var SettingsgeneralScalarFieldEnum;
(function (SettingsgeneralScalarFieldEnum) {
    SettingsgeneralScalarFieldEnum["id"] = "id";
    SettingsgeneralScalarFieldEnum["created_at"] = "created_at";
    SettingsgeneralScalarFieldEnum["site_title"] = "site_title";
    SettingsgeneralScalarFieldEnum["site_tagline"] = "site_tagline";
    SettingsgeneralScalarFieldEnum["site_website"] = "site_website";
    SettingsgeneralScalarFieldEnum["email"] = "email";
    SettingsgeneralScalarFieldEnum["aws_s3"] = "aws_s3";
    SettingsgeneralScalarFieldEnum["google_drive"] = "google_drive";
})(SettingsgeneralScalarFieldEnum = exports.SettingsgeneralScalarFieldEnum || (exports.SettingsgeneralScalarFieldEnum = {}));
TypeGraphQL.registerEnumType(SettingsgeneralScalarFieldEnum, {
    name: "SettingsgeneralScalarFieldEnum",
    description: undefined,
});
