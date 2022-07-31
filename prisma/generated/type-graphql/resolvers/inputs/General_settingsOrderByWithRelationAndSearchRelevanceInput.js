"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.General_settingsOrderByWithRelationAndSearchRelevanceInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const General_settingsOrderByRelevanceInput_1 = require("../inputs/General_settingsOrderByRelevanceInput");
const SortOrder_1 = require("../../enums/SortOrder");
let General_settingsOrderByWithRelationAndSearchRelevanceInput = class General_settingsOrderByWithRelationAndSearchRelevanceInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], General_settingsOrderByWithRelationAndSearchRelevanceInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], General_settingsOrderByWithRelationAndSearchRelevanceInput.prototype, "created_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], General_settingsOrderByWithRelationAndSearchRelevanceInput.prototype, "title", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], General_settingsOrderByWithRelationAndSearchRelevanceInput.prototype, "tagline", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], General_settingsOrderByWithRelationAndSearchRelevanceInput.prototype, "url", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], General_settingsOrderByWithRelationAndSearchRelevanceInput.prototype, "email", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], General_settingsOrderByWithRelationAndSearchRelevanceInput.prototype, "access_restrictions", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], General_settingsOrderByWithRelationAndSearchRelevanceInput.prototype, "restriction_mode", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], General_settingsOrderByWithRelationAndSearchRelevanceInput.prototype, "startup_page", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], General_settingsOrderByWithRelationAndSearchRelevanceInput.prototype, "landing_page", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], General_settingsOrderByWithRelationAndSearchRelevanceInput.prototype, "http_response", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], General_settingsOrderByWithRelationAndSearchRelevanceInput.prototype, "store_email", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], General_settingsOrderByWithRelationAndSearchRelevanceInput.prototype, "store_contact", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], General_settingsOrderByWithRelationAndSearchRelevanceInput.prototype, "store_contact_two", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], General_settingsOrderByWithRelationAndSearchRelevanceInput.prototype, "customer_support", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => General_settingsOrderByRelevanceInput_1.General_settingsOrderByRelevanceInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", General_settingsOrderByRelevanceInput_1.General_settingsOrderByRelevanceInput)
], General_settingsOrderByWithRelationAndSearchRelevanceInput.prototype, "_relevance", void 0);
General_settingsOrderByWithRelationAndSearchRelevanceInput = tslib_1.__decorate([
    TypeGraphQL.InputType("General_settingsOrderByWithRelationAndSearchRelevanceInput", {
        isAbstract: true
    })
], General_settingsOrderByWithRelationAndSearchRelevanceInput);
exports.General_settingsOrderByWithRelationAndSearchRelevanceInput = General_settingsOrderByWithRelationAndSearchRelevanceInput;
