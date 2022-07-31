"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SourceOrderByRelevanceFieldEnum = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var SourceOrderByRelevanceFieldEnum;
(function (SourceOrderByRelevanceFieldEnum) {
    SourceOrderByRelevanceFieldEnum["name"] = "name";
    SourceOrderByRelevanceFieldEnum["description"] = "description";
    SourceOrderByRelevanceFieldEnum["latitude"] = "latitude";
    SourceOrderByRelevanceFieldEnum["longitude"] = "longitude";
    SourceOrderByRelevanceFieldEnum["contact_name"] = "contact_name";
    SourceOrderByRelevanceFieldEnum["email"] = "email";
    SourceOrderByRelevanceFieldEnum["country"] = "country";
    SourceOrderByRelevanceFieldEnum["state"] = "state";
    SourceOrderByRelevanceFieldEnum["city"] = "city";
    SourceOrderByRelevanceFieldEnum["street"] = "street";
})(SourceOrderByRelevanceFieldEnum = exports.SourceOrderByRelevanceFieldEnum || (exports.SourceOrderByRelevanceFieldEnum = {}));
TypeGraphQL.registerEnumType(SourceOrderByRelevanceFieldEnum, {
    name: "SourceOrderByRelevanceFieldEnum",
    description: undefined,
});
