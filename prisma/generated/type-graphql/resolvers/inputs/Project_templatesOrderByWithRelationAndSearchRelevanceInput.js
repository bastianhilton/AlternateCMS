"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Project_templatesOrderByWithRelationAndSearchRelevanceInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Project_templatesOrderByRelevanceInput_1 = require("../inputs/Project_templatesOrderByRelevanceInput");
const SortOrder_1 = require("../../enums/SortOrder");
let Project_templatesOrderByWithRelationAndSearchRelevanceInput = class Project_templatesOrderByWithRelationAndSearchRelevanceInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Project_templatesOrderByWithRelationAndSearchRelevanceInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Project_templatesOrderByWithRelationAndSearchRelevanceInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Project_templatesOrderByWithRelationAndSearchRelevanceInput.prototype, "status", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Project_templatesOrderByWithRelationAndSearchRelevanceInput.prototype, "consider_working_days", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Project_templatesOrderByWithRelationAndSearchRelevanceInput.prototype, "priority", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Project_templatesOrderByWithRelationAndSearchRelevanceInput.prototype, "project_manager", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Project_templatesOrderByWithRelationAndSearchRelevanceInput.prototype, "resource", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Project_templatesOrderByWithRelationAndSearchRelevanceInput.prototype, "content", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Project_templatesOrderByRelevanceInput_1.Project_templatesOrderByRelevanceInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Project_templatesOrderByRelevanceInput_1.Project_templatesOrderByRelevanceInput)
], Project_templatesOrderByWithRelationAndSearchRelevanceInput.prototype, "_relevance", void 0);
Project_templatesOrderByWithRelationAndSearchRelevanceInput = tslib_1.__decorate([
    TypeGraphQL.InputType("Project_templatesOrderByWithRelationAndSearchRelevanceInput", {
        isAbstract: true
    })
], Project_templatesOrderByWithRelationAndSearchRelevanceInput);
exports.Project_templatesOrderByWithRelationAndSearchRelevanceInput = Project_templatesOrderByWithRelationAndSearchRelevanceInput;
