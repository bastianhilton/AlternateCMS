"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SourceOrderByRelevanceInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
const SourceOrderByRelevanceFieldEnum_1 = require("../../enums/SourceOrderByRelevanceFieldEnum");
let SourceOrderByRelevanceInput = class SourceOrderByRelevanceInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [SourceOrderByRelevanceFieldEnum_1.SourceOrderByRelevanceFieldEnum], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], SourceOrderByRelevanceInput.prototype, "fields", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], SourceOrderByRelevanceInput.prototype, "sort", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], SourceOrderByRelevanceInput.prototype, "search", void 0);
SourceOrderByRelevanceInput = tslib_1.__decorate([
    TypeGraphQL.InputType("SourceOrderByRelevanceInput", {
        isAbstract: true
    })
], SourceOrderByRelevanceInput);
exports.SourceOrderByRelevanceInput = SourceOrderByRelevanceInput;
