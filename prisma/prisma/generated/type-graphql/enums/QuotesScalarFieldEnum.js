"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuotesScalarFieldEnum = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var QuotesScalarFieldEnum;
(function (QuotesScalarFieldEnum) {
    QuotesScalarFieldEnum["id"] = "id";
    QuotesScalarFieldEnum["name"] = "name";
    QuotesScalarFieldEnum["grand_total"] = "grand_total";
    QuotesScalarFieldEnum["created_at"] = "created_at";
    QuotesScalarFieldEnum["categories"] = "categories";
    QuotesScalarFieldEnum["valid_until"] = "valid_until";
    QuotesScalarFieldEnum["quote_stage"] = "quote_stage";
    QuotesScalarFieldEnum["customers"] = "customers";
    QuotesScalarFieldEnum["cust_id"] = "cust_id";
    QuotesScalarFieldEnum["prod_id"] = "prod_id";
    QuotesScalarFieldEnum["order_id"] = "order_id";
    QuotesScalarFieldEnum["invoice_status"] = "invoice_status";
    QuotesScalarFieldEnum["payment_terms"] = "payment_terms";
    QuotesScalarFieldEnum["assigned_to"] = "assigned_to";
    QuotesScalarFieldEnum["approval_status"] = "approval_status";
    QuotesScalarFieldEnum["approval_issues"] = "approval_issues";
    QuotesScalarFieldEnum["account"] = "account";
    QuotesScalarFieldEnum["contact"] = "contact";
    QuotesScalarFieldEnum["billing_street"] = "billing_street";
    QuotesScalarFieldEnum["billing_city"] = "billing_city";
    QuotesScalarFieldEnum["billing_state"] = "billing_state";
    QuotesScalarFieldEnum["billing_postal"] = "billing_postal";
    QuotesScalarFieldEnum["billing_country"] = "billing_country";
    QuotesScalarFieldEnum["shipping_street"] = "shipping_street";
    QuotesScalarFieldEnum["shipping_city"] = "shipping_city";
    QuotesScalarFieldEnum["shipping_state"] = "shipping_state";
    QuotesScalarFieldEnum["shipping_postal"] = "shipping_postal";
    QuotesScalarFieldEnum["shipping_country"] = "shipping_country";
    QuotesScalarFieldEnum["currency"] = "currency";
    QuotesScalarFieldEnum["total"] = "total";
    QuotesScalarFieldEnum["subtotal"] = "subtotal";
    QuotesScalarFieldEnum["discount"] = "discount";
    QuotesScalarFieldEnum["shipping"] = "shipping";
    QuotesScalarFieldEnum["shipping_tax"] = "shipping_tax";
    QuotesScalarFieldEnum["tax"] = "tax";
    QuotesScalarFieldEnum["line_item_name"] = "line_item_name";
    QuotesScalarFieldEnum["line_item_total"] = "line_item_total";
    QuotesScalarFieldEnum["line_item_subtotal"] = "line_item_subtotal";
    QuotesScalarFieldEnum["line_item_discount"] = "line_item_discount";
    QuotesScalarFieldEnum["line_item_tax"] = "line_item_tax";
    QuotesScalarFieldEnum["line_item_group_total"] = "line_item_group_total";
})(QuotesScalarFieldEnum = exports.QuotesScalarFieldEnum || (exports.QuotesScalarFieldEnum = {}));
TypeGraphQL.registerEnumType(QuotesScalarFieldEnum, {
    name: "QuotesScalarFieldEnum",
    description: undefined,
});