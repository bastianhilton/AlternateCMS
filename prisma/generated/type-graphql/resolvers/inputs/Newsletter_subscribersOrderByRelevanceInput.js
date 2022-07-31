"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Newsletter_subscribersOrderByRelevanceInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Newsletter_subscribersOrderByRelevanceFieldEnum_1 = require("../../enums/Newsletter_subscribersOrderByRelevanceFieldEnum");
const SortOrder_1 = require("../../enums/SortOrder");
let Newsletter_subscribersOrderByRelevanceInput = class Newsletter_subscribersOrderByRelevanceInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Newsletter_subscribersOrderByRelevanceFieldEnum_1.Newsletter_subscribersOrderByRelevanceFieldEnum], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], Newsletter_subscribersOrderByRelevanceInput.prototype, "fields", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], Newsletter_subscribersOrderByRelevanceInput.prototype, "sort", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], Newsletter_subscribersOrderByRelevanceInput.prototype, "search", void 0);
Newsletter_subscribersOrderByRelevanceInput = tslib_1.__decorate([
    TypeGraphQL.InputType("Newsletter_subscribersOrderByRelevanceInput", {
        isAbstract: true
    })
], Newsletter_subscribersOrderByRelevanceInput);
exports.Newsletter_subscribersOrderByRelevanceInput = Newsletter_subscribersOrderByRelevanceInput;
