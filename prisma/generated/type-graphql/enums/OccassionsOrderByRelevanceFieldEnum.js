"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OccassionsOrderByRelevanceFieldEnum = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var OccassionsOrderByRelevanceFieldEnum;
(function (OccassionsOrderByRelevanceFieldEnum) {
    OccassionsOrderByRelevanceFieldEnum["code"] = "code";
    OccassionsOrderByRelevanceFieldEnum["name"] = "name";
    OccassionsOrderByRelevanceFieldEnum["category"] = "category";
    OccassionsOrderByRelevanceFieldEnum["tags"] = "tags";
    OccassionsOrderByRelevanceFieldEnum["description"] = "description";
    OccassionsOrderByRelevanceFieldEnum["products_occassionsToproducts"] = "products_occassionsToproducts";
    OccassionsOrderByRelevanceFieldEnum["wishlists_occassionsTowishlists"] = "wishlists_occassionsTowishlists";
})(OccassionsOrderByRelevanceFieldEnum = exports.OccassionsOrderByRelevanceFieldEnum || (exports.OccassionsOrderByRelevanceFieldEnum = {}));
TypeGraphQL.registerEnumType(OccassionsOrderByRelevanceFieldEnum, {
    name: "OccassionsOrderByRelevanceFieldEnum",
    description: undefined,
});
