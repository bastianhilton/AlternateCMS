"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.KnowledgebaseOrderByWithRelationAndSearchRelevanceInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const KnowledgebaseOrderByRelevanceInput_1 = require("../inputs/KnowledgebaseOrderByRelevanceInput");
const SortOrder_1 = require("../../enums/SortOrder");
let KnowledgebaseOrderByWithRelationAndSearchRelevanceInput = class KnowledgebaseOrderByWithRelationAndSearchRelevanceInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], KnowledgebaseOrderByWithRelationAndSearchRelevanceInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], KnowledgebaseOrderByWithRelationAndSearchRelevanceInput.prototype, "created_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], KnowledgebaseOrderByWithRelationAndSearchRelevanceInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], KnowledgebaseOrderByWithRelationAndSearchRelevanceInput.prototype, "status", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], KnowledgebaseOrderByWithRelationAndSearchRelevanceInput.prototype, "revision", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], KnowledgebaseOrderByWithRelationAndSearchRelevanceInput.prototype, "content", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], KnowledgebaseOrderByWithRelationAndSearchRelevanceInput.prototype, "resolution", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], KnowledgebaseOrderByWithRelationAndSearchRelevanceInput.prototype, "author", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], KnowledgebaseOrderByWithRelationAndSearchRelevanceInput.prototype, "approver", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], KnowledgebaseOrderByWithRelationAndSearchRelevanceInput.prototype, "date_modified", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => KnowledgebaseOrderByRelevanceInput_1.KnowledgebaseOrderByRelevanceInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", KnowledgebaseOrderByRelevanceInput_1.KnowledgebaseOrderByRelevanceInput)
], KnowledgebaseOrderByWithRelationAndSearchRelevanceInput.prototype, "_relevance", void 0);
KnowledgebaseOrderByWithRelationAndSearchRelevanceInput = tslib_1.__decorate([
    TypeGraphQL.InputType("KnowledgebaseOrderByWithRelationAndSearchRelevanceInput", {
        isAbstract: true
    })
], KnowledgebaseOrderByWithRelationAndSearchRelevanceInput);
exports.KnowledgebaseOrderByWithRelationAndSearchRelevanceInput = KnowledgebaseOrderByWithRelationAndSearchRelevanceInput;
