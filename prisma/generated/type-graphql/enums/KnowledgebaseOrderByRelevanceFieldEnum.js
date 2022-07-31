"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.KnowledgebaseOrderByRelevanceFieldEnum = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var KnowledgebaseOrderByRelevanceFieldEnum;
(function (KnowledgebaseOrderByRelevanceFieldEnum) {
    KnowledgebaseOrderByRelevanceFieldEnum["name"] = "name";
    KnowledgebaseOrderByRelevanceFieldEnum["status"] = "status";
    KnowledgebaseOrderByRelevanceFieldEnum["revision"] = "revision";
    KnowledgebaseOrderByRelevanceFieldEnum["content"] = "content";
    KnowledgebaseOrderByRelevanceFieldEnum["resolution"] = "resolution";
    KnowledgebaseOrderByRelevanceFieldEnum["author"] = "author";
    KnowledgebaseOrderByRelevanceFieldEnum["approver"] = "approver";
})(KnowledgebaseOrderByRelevanceFieldEnum = exports.KnowledgebaseOrderByRelevanceFieldEnum || (exports.KnowledgebaseOrderByRelevanceFieldEnum = {}));
TypeGraphQL.registerEnumType(KnowledgebaseOrderByRelevanceFieldEnum, {
    name: "KnowledgebaseOrderByRelevanceFieldEnum",
    description: undefined,
});
