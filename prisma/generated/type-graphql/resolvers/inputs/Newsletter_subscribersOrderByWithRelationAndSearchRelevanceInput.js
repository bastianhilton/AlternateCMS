"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Newsletter_subscribersOrderByWithRelationAndSearchRelevanceInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Newsletter_subscribersOrderByRelevanceInput_1 = require("../inputs/Newsletter_subscribersOrderByRelevanceInput");
const SortOrder_1 = require("../../enums/SortOrder");
let Newsletter_subscribersOrderByWithRelationAndSearchRelevanceInput = class Newsletter_subscribersOrderByWithRelationAndSearchRelevanceInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Newsletter_subscribersOrderByWithRelationAndSearchRelevanceInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Newsletter_subscribersOrderByWithRelationAndSearchRelevanceInput.prototype, "email", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Newsletter_subscribersOrderByWithRelationAndSearchRelevanceInput.prototype, "customer_first_name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Newsletter_subscribersOrderByWithRelationAndSearchRelevanceInput.prototype, "customer_last_name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Newsletter_subscribersOrderByWithRelationAndSearchRelevanceInput.prototype, "store", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Newsletter_subscribersOrderByWithRelationAndSearchRelevanceInput.prototype, "status", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Newsletter_subscribersOrderByWithRelationAndSearchRelevanceInput.prototype, "websites", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Newsletter_subscribersOrderByWithRelationAndSearchRelevanceInput.prototype, "created_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Newsletter_subscribersOrderByWithRelationAndSearchRelevanceInput.prototype, "cust_id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Newsletter_subscribersOrderByWithRelationAndSearchRelevanceInput.prototype, "customers", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Newsletter_subscribersOrderByRelevanceInput_1.Newsletter_subscribersOrderByRelevanceInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Newsletter_subscribersOrderByRelevanceInput_1.Newsletter_subscribersOrderByRelevanceInput)
], Newsletter_subscribersOrderByWithRelationAndSearchRelevanceInput.prototype, "_relevance", void 0);
Newsletter_subscribersOrderByWithRelationAndSearchRelevanceInput = tslib_1.__decorate([
    TypeGraphQL.InputType("Newsletter_subscribersOrderByWithRelationAndSearchRelevanceInput", {
        isAbstract: true
    })
], Newsletter_subscribersOrderByWithRelationAndSearchRelevanceInput);
exports.Newsletter_subscribersOrderByWithRelationAndSearchRelevanceInput = Newsletter_subscribersOrderByWithRelationAndSearchRelevanceInput;
