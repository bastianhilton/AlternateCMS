"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OccassionsOrderByRelevanceInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const OccassionsOrderByRelevanceFieldEnum_1 = require("../../enums/OccassionsOrderByRelevanceFieldEnum");
const SortOrder_1 = require("../../enums/SortOrder");
let OccassionsOrderByRelevanceInput = class OccassionsOrderByRelevanceInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OccassionsOrderByRelevanceFieldEnum_1.OccassionsOrderByRelevanceFieldEnum], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], OccassionsOrderByRelevanceInput.prototype, "fields", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], OccassionsOrderByRelevanceInput.prototype, "sort", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], OccassionsOrderByRelevanceInput.prototype, "search", void 0);
OccassionsOrderByRelevanceInput = tslib_1.__decorate([
    TypeGraphQL.InputType("OccassionsOrderByRelevanceInput", {
        isAbstract: true
    })
], OccassionsOrderByRelevanceInput);
exports.OccassionsOrderByRelevanceInput = OccassionsOrderByRelevanceInput;
