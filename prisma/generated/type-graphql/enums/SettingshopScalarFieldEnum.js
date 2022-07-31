"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SettingshopScalarFieldEnum = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var SettingshopScalarFieldEnum;
(function (SettingshopScalarFieldEnum) {
    SettingshopScalarFieldEnum["id"] = "id";
    SettingshopScalarFieldEnum["enable_product_assignment"] = "enable_product_assignment";
    SettingshopScalarFieldEnum["product_videos"] = "product_videos";
    SettingshopScalarFieldEnum["seller_payouts"] = "seller_payouts";
    SettingshopScalarFieldEnum["admin_approval"] = "admin_approval";
    SettingshopScalarFieldEnum["enable_review_system"] = "enable_review_system";
    SettingshopScalarFieldEnum["customer_rate_vendor"] = "customer_rate_vendor";
    SettingshopScalarFieldEnum["multishipping"] = "multishipping";
    SettingshopScalarFieldEnum["vendor_transaction_id"] = "vendor_transaction_id";
    SettingshopScalarFieldEnum["enable_vendor_product_attribute"] = "enable_vendor_product_attribute";
})(SettingshopScalarFieldEnum = exports.SettingshopScalarFieldEnum || (exports.SettingshopScalarFieldEnum = {}));
TypeGraphQL.registerEnumType(SettingshopScalarFieldEnum, {
    name: "SettingshopScalarFieldEnum",
    description: undefined,
});
