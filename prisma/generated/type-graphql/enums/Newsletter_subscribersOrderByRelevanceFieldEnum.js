"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Newsletter_subscribersOrderByRelevanceFieldEnum = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var Newsletter_subscribersOrderByRelevanceFieldEnum;
(function (Newsletter_subscribersOrderByRelevanceFieldEnum) {
    Newsletter_subscribersOrderByRelevanceFieldEnum["email"] = "email";
    Newsletter_subscribersOrderByRelevanceFieldEnum["customer_first_name"] = "customer_first_name";
    Newsletter_subscribersOrderByRelevanceFieldEnum["customer_last_name"] = "customer_last_name";
    Newsletter_subscribersOrderByRelevanceFieldEnum["store"] = "store";
    Newsletter_subscribersOrderByRelevanceFieldEnum["status"] = "status";
    Newsletter_subscribersOrderByRelevanceFieldEnum["websites"] = "websites";
    Newsletter_subscribersOrderByRelevanceFieldEnum["customers"] = "customers";
})(Newsletter_subscribersOrderByRelevanceFieldEnum = exports.Newsletter_subscribersOrderByRelevanceFieldEnum || (exports.Newsletter_subscribersOrderByRelevanceFieldEnum = {}));
TypeGraphQL.registerEnumType(Newsletter_subscribersOrderByRelevanceFieldEnum, {
    name: "Newsletter_subscribersOrderByRelevanceFieldEnum",
    description: undefined,
});
