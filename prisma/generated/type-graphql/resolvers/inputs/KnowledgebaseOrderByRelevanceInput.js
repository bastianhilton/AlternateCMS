"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.KnowledgebaseOrderByRelevanceInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const KnowledgebaseOrderByRelevanceFieldEnum_1 = require("../../enums/KnowledgebaseOrderByRelevanceFieldEnum");
const SortOrder_1 = require("../../enums/SortOrder");
let KnowledgebaseOrderByRelevanceInput = class KnowledgebaseOrderByRelevanceInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [KnowledgebaseOrderByRelevanceFieldEnum_1.KnowledgebaseOrderByRelevanceFieldEnum], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], KnowledgebaseOrderByRelevanceInput.prototype, "fields", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], KnowledgebaseOrderByRelevanceInput.prototype, "sort", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], KnowledgebaseOrderByRelevanceInput.prototype, "search", void 0);
KnowledgebaseOrderByRelevanceInput = tslib_1.__decorate([
    TypeGraphQL.InputType("KnowledgebaseOrderByRelevanceInput", {
        isAbstract: true
    })
], KnowledgebaseOrderByRelevanceInput);
exports.KnowledgebaseOrderByRelevanceInput = KnowledgebaseOrderByRelevanceInput;
