"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pdf_templatesOrderByWithRelationAndSearchRelevanceInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Pdf_templatesOrderByRelevanceInput_1 = require("../inputs/Pdf_templatesOrderByRelevanceInput");
const SortOrder_1 = require("../../enums/SortOrder");
let Pdf_templatesOrderByWithRelationAndSearchRelevanceInput = class Pdf_templatesOrderByWithRelationAndSearchRelevanceInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Pdf_templatesOrderByWithRelationAndSearchRelevanceInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Pdf_templatesOrderByWithRelationAndSearchRelevanceInput.prototype, "created_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Pdf_templatesOrderByWithRelationAndSearchRelevanceInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Pdf_templatesOrderByWithRelationAndSearchRelevanceInput.prototype, "assigned_to", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Pdf_templatesOrderByWithRelationAndSearchRelevanceInput.prototype, "type", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Pdf_templatesOrderByWithRelationAndSearchRelevanceInput.prototype, "active", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Pdf_templatesOrderByWithRelationAndSearchRelevanceInput.prototype, "page_size", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Pdf_templatesOrderByWithRelationAndSearchRelevanceInput.prototype, "orientation", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Pdf_templatesOrderByWithRelationAndSearchRelevanceInput.prototype, "content", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Pdf_templatesOrderByWithRelationAndSearchRelevanceInput.prototype, "header", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Pdf_templatesOrderByWithRelationAndSearchRelevanceInput.prototype, "footer", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Pdf_templatesOrderByWithRelationAndSearchRelevanceInput.prototype, "margin_left", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Pdf_templatesOrderByWithRelationAndSearchRelevanceInput.prototype, "margin_right", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Pdf_templatesOrderByWithRelationAndSearchRelevanceInput.prototype, "margin_top", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Pdf_templatesOrderByWithRelationAndSearchRelevanceInput.prototype, "margin_bottom", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Pdf_templatesOrderByWithRelationAndSearchRelevanceInput.prototype, "margin_header", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Pdf_templatesOrderByWithRelationAndSearchRelevanceInput.prototype, "margin_footer", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Pdf_templatesOrderByRelevanceInput_1.Pdf_templatesOrderByRelevanceInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Pdf_templatesOrderByRelevanceInput_1.Pdf_templatesOrderByRelevanceInput)
], Pdf_templatesOrderByWithRelationAndSearchRelevanceInput.prototype, "_relevance", void 0);
Pdf_templatesOrderByWithRelationAndSearchRelevanceInput = tslib_1.__decorate([
    TypeGraphQL.InputType("Pdf_templatesOrderByWithRelationAndSearchRelevanceInput", {
        isAbstract: true
    })
], Pdf_templatesOrderByWithRelationAndSearchRelevanceInput);
exports.Pdf_templatesOrderByWithRelationAndSearchRelevanceInput = Pdf_templatesOrderByWithRelationAndSearchRelevanceInput;
