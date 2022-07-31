"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Url_rewritesOrderByRelevanceInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
const Url_rewritesOrderByRelevanceFieldEnum_1 = require("../../enums/Url_rewritesOrderByRelevanceFieldEnum");
let Url_rewritesOrderByRelevanceInput = class Url_rewritesOrderByRelevanceInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Url_rewritesOrderByRelevanceFieldEnum_1.Url_rewritesOrderByRelevanceFieldEnum], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], Url_rewritesOrderByRelevanceInput.prototype, "fields", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], Url_rewritesOrderByRelevanceInput.prototype, "sort", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], Url_rewritesOrderByRelevanceInput.prototype, "search", void 0);
Url_rewritesOrderByRelevanceInput = tslib_1.__decorate([
    TypeGraphQL.InputType("Url_rewritesOrderByRelevanceInput", {
        isAbstract: true
    })
], Url_rewritesOrderByRelevanceInput);
exports.Url_rewritesOrderByRelevanceInput = Url_rewritesOrderByRelevanceInput;
