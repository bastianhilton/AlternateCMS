"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OccassionsScalarFieldEnum = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var OccassionsScalarFieldEnum;
(function (OccassionsScalarFieldEnum) {
    OccassionsScalarFieldEnum["id"] = "id";
    OccassionsScalarFieldEnum["created_at"] = "created_at";
    OccassionsScalarFieldEnum["code"] = "code";
    OccassionsScalarFieldEnum["name"] = "name";
    OccassionsScalarFieldEnum["category"] = "category";
    OccassionsScalarFieldEnum["tags"] = "tags";
    OccassionsScalarFieldEnum["description"] = "description";
    OccassionsScalarFieldEnum["products"] = "products";
    OccassionsScalarFieldEnum["wishlists"] = "wishlists";
    OccassionsScalarFieldEnum["products_occassionsToproducts"] = "products_occassionsToproducts";
    OccassionsScalarFieldEnum["wishlists_occassionsTowishlists"] = "wishlists_occassionsTowishlists";
})(OccassionsScalarFieldEnum = exports.OccassionsScalarFieldEnum || (exports.OccassionsScalarFieldEnum = {}));
TypeGraphQL.registerEnumType(OccassionsScalarFieldEnum, {
    name: "OccassionsScalarFieldEnum",
    description: undefined,
});
