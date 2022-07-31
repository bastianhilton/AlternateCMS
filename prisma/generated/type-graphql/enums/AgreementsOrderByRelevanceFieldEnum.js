"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AgreementsOrderByRelevanceFieldEnum = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var AgreementsOrderByRelevanceFieldEnum;
(function (AgreementsOrderByRelevanceFieldEnum) {
    AgreementsOrderByRelevanceFieldEnum["content"] = "content";
    AgreementsOrderByRelevanceFieldEnum["name"] = "name";
    AgreementsOrderByRelevanceFieldEnum["image"] = "image";
    AgreementsOrderByRelevanceFieldEnum["excerpt"] = "excerpt";
    AgreementsOrderByRelevanceFieldEnum["type"] = "type";
    AgreementsOrderByRelevanceFieldEnum["mediamanager"] = "mediamanager";
})(AgreementsOrderByRelevanceFieldEnum = exports.AgreementsOrderByRelevanceFieldEnum || (exports.AgreementsOrderByRelevanceFieldEnum = {}));
TypeGraphQL.registerEnumType(AgreementsOrderByRelevanceFieldEnum, {
    name: "AgreementsOrderByRelevanceFieldEnum",
    description: undefined,
});
