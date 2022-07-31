"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReturnsOrderByWithRelationAndSearchRelevanceInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ReturnsOrderByRelevanceInput_1 = require("../inputs/ReturnsOrderByRelevanceInput");
const SortOrder_1 = require("../../enums/SortOrder");
let ReturnsOrderByWithRelationAndSearchRelevanceInput = class ReturnsOrderByWithRelationAndSearchRelevanceInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ReturnsOrderByWithRelationAndSearchRelevanceInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ReturnsOrderByWithRelationAndSearchRelevanceInput.prototype, "created_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ReturnsOrderByWithRelationAndSearchRelevanceInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ReturnsOrderByWithRelationAndSearchRelevanceInput.prototype, "validity", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ReturnsOrderByWithRelationAndSearchRelevanceInput.prototype, "return_prefix", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ReturnsOrderByWithRelationAndSearchRelevanceInput.prototype, "prod_id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ReturnsOrderByWithRelationAndSearchRelevanceInput.prototype, "cust_id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ReturnsOrderByWithRelationAndSearchRelevanceInput.prototype, "customers", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ReturnsOrderByWithRelationAndSearchRelevanceInput.prototype, "products", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReturnsOrderByRelevanceInput_1.ReturnsOrderByRelevanceInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReturnsOrderByRelevanceInput_1.ReturnsOrderByRelevanceInput)
], ReturnsOrderByWithRelationAndSearchRelevanceInput.prototype, "_relevance", void 0);
ReturnsOrderByWithRelationAndSearchRelevanceInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ReturnsOrderByWithRelationAndSearchRelevanceInput", {
        isAbstract: true
    })
], ReturnsOrderByWithRelationAndSearchRelevanceInput);
exports.ReturnsOrderByWithRelationAndSearchRelevanceInput = ReturnsOrderByWithRelationAndSearchRelevanceInput;
