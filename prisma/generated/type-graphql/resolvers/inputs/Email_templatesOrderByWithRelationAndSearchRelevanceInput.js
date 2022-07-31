"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Email_templatesOrderByWithRelationAndSearchRelevanceInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Email_templatesOrderByRelevanceInput_1 = require("../inputs/Email_templatesOrderByRelevanceInput");
const SortOrder_1 = require("../../enums/SortOrder");
let Email_templatesOrderByWithRelationAndSearchRelevanceInput = class Email_templatesOrderByWithRelationAndSearchRelevanceInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Email_templatesOrderByWithRelationAndSearchRelevanceInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Email_templatesOrderByWithRelationAndSearchRelevanceInput.prototype, "created_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Email_templatesOrderByWithRelationAndSearchRelevanceInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Email_templatesOrderByWithRelationAndSearchRelevanceInput.prototype, "assigned_to", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Email_templatesOrderByWithRelationAndSearchRelevanceInput.prototype, "type", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Email_templatesOrderByWithRelationAndSearchRelevanceInput.prototype, "active", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Email_templatesOrderByWithRelationAndSearchRelevanceInput.prototype, "insert_variable", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Email_templatesOrderByWithRelationAndSearchRelevanceInput.prototype, "subject", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Email_templatesOrderByWithRelationAndSearchRelevanceInput.prototype, "content", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Email_templatesOrderByWithRelationAndSearchRelevanceInput.prototype, "header", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Email_templatesOrderByWithRelationAndSearchRelevanceInput.prototype, "footer", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Email_templatesOrderByWithRelationAndSearchRelevanceInput.prototype, "width", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Email_templatesOrderByWithRelationAndSearchRelevanceInput.prototype, "height", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Email_templatesOrderByWithRelationAndSearchRelevanceInput.prototype, "media", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Email_templatesOrderByRelevanceInput_1.Email_templatesOrderByRelevanceInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Email_templatesOrderByRelevanceInput_1.Email_templatesOrderByRelevanceInput)
], Email_templatesOrderByWithRelationAndSearchRelevanceInput.prototype, "_relevance", void 0);
Email_templatesOrderByWithRelationAndSearchRelevanceInput = tslib_1.__decorate([
    TypeGraphQL.InputType("Email_templatesOrderByWithRelationAndSearchRelevanceInput", {
        isAbstract: true
    })
], Email_templatesOrderByWithRelationAndSearchRelevanceInput);
exports.Email_templatesOrderByWithRelationAndSearchRelevanceInput = Email_templatesOrderByWithRelationAndSearchRelevanceInput;
