"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OccassionsOrderByWithRelationAndSearchRelevanceInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const OccassionsOrderByRelevanceInput_1 = require("../inputs/OccassionsOrderByRelevanceInput");
const SortOrder_1 = require("../../enums/SortOrder");
let OccassionsOrderByWithRelationAndSearchRelevanceInput = class OccassionsOrderByWithRelationAndSearchRelevanceInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], OccassionsOrderByWithRelationAndSearchRelevanceInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], OccassionsOrderByWithRelationAndSearchRelevanceInput.prototype, "created_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], OccassionsOrderByWithRelationAndSearchRelevanceInput.prototype, "code", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], OccassionsOrderByWithRelationAndSearchRelevanceInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], OccassionsOrderByWithRelationAndSearchRelevanceInput.prototype, "category", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], OccassionsOrderByWithRelationAndSearchRelevanceInput.prototype, "tags", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], OccassionsOrderByWithRelationAndSearchRelevanceInput.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], OccassionsOrderByWithRelationAndSearchRelevanceInput.prototype, "products", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], OccassionsOrderByWithRelationAndSearchRelevanceInput.prototype, "wishlists", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], OccassionsOrderByWithRelationAndSearchRelevanceInput.prototype, "products_occassionsToproducts", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], OccassionsOrderByWithRelationAndSearchRelevanceInput.prototype, "wishlists_occassionsTowishlists", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OccassionsOrderByRelevanceInput_1.OccassionsOrderByRelevanceInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OccassionsOrderByRelevanceInput_1.OccassionsOrderByRelevanceInput)
], OccassionsOrderByWithRelationAndSearchRelevanceInput.prototype, "_relevance", void 0);
OccassionsOrderByWithRelationAndSearchRelevanceInput = tslib_1.__decorate([
    TypeGraphQL.InputType("OccassionsOrderByWithRelationAndSearchRelevanceInput", {
        isAbstract: true
    })
], OccassionsOrderByWithRelationAndSearchRelevanceInput);
exports.OccassionsOrderByWithRelationAndSearchRelevanceInput = OccassionsOrderByWithRelationAndSearchRelevanceInput;
