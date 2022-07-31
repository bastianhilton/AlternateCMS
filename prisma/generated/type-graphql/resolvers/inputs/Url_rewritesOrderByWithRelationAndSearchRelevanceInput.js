"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Url_rewritesOrderByWithRelationAndSearchRelevanceInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Url_rewritesOrderByRelevanceInput_1 = require("../inputs/Url_rewritesOrderByRelevanceInput");
const SortOrder_1 = require("../../enums/SortOrder");
let Url_rewritesOrderByWithRelationAndSearchRelevanceInput = class Url_rewritesOrderByWithRelationAndSearchRelevanceInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Url_rewritesOrderByWithRelationAndSearchRelevanceInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Url_rewritesOrderByWithRelationAndSearchRelevanceInput.prototype, "request_path", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Url_rewritesOrderByWithRelationAndSearchRelevanceInput.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Url_rewritesOrderByWithRelationAndSearchRelevanceInput.prototype, "redirect_type", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Url_rewritesOrderByWithRelationAndSearchRelevanceInput.prototype, "target_path", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Url_rewritesOrderByWithRelationAndSearchRelevanceInput.prototype, "store", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Url_rewritesOrderByRelevanceInput_1.Url_rewritesOrderByRelevanceInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Url_rewritesOrderByRelevanceInput_1.Url_rewritesOrderByRelevanceInput)
], Url_rewritesOrderByWithRelationAndSearchRelevanceInput.prototype, "_relevance", void 0);
Url_rewritesOrderByWithRelationAndSearchRelevanceInput = tslib_1.__decorate([
    TypeGraphQL.InputType("Url_rewritesOrderByWithRelationAndSearchRelevanceInput", {
        isAbstract: true
    })
], Url_rewritesOrderByWithRelationAndSearchRelevanceInput);
exports.Url_rewritesOrderByWithRelationAndSearchRelevanceInput = Url_rewritesOrderByWithRelationAndSearchRelevanceInput;
