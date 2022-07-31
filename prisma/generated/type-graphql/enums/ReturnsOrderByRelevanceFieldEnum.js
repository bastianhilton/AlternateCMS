"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReturnsOrderByRelevanceFieldEnum = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var ReturnsOrderByRelevanceFieldEnum;
(function (ReturnsOrderByRelevanceFieldEnum) {
    ReturnsOrderByRelevanceFieldEnum["name"] = "name";
    ReturnsOrderByRelevanceFieldEnum["validity"] = "validity";
    ReturnsOrderByRelevanceFieldEnum["return_prefix"] = "return_prefix";
    ReturnsOrderByRelevanceFieldEnum["customers"] = "customers";
    ReturnsOrderByRelevanceFieldEnum["products"] = "products";
})(ReturnsOrderByRelevanceFieldEnum = exports.ReturnsOrderByRelevanceFieldEnum || (exports.ReturnsOrderByRelevanceFieldEnum = {}));
TypeGraphQL.registerEnumType(ReturnsOrderByRelevanceFieldEnum, {
    name: "ReturnsOrderByRelevanceFieldEnum",
    description: undefined,
});
