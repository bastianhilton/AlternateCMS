"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Project_templatesOrderByRelevanceInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Project_templatesOrderByRelevanceFieldEnum_1 = require("../../enums/Project_templatesOrderByRelevanceFieldEnum");
const SortOrder_1 = require("../../enums/SortOrder");
let Project_templatesOrderByRelevanceInput = class Project_templatesOrderByRelevanceInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Project_templatesOrderByRelevanceFieldEnum_1.Project_templatesOrderByRelevanceFieldEnum], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], Project_templatesOrderByRelevanceInput.prototype, "fields", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], Project_templatesOrderByRelevanceInput.prototype, "sort", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], Project_templatesOrderByRelevanceInput.prototype, "search", void 0);
Project_templatesOrderByRelevanceInput = tslib_1.__decorate([
    TypeGraphQL.InputType("Project_templatesOrderByRelevanceInput", {
        isAbstract: true
    })
], Project_templatesOrderByRelevanceInput);
exports.Project_templatesOrderByRelevanceInput = Project_templatesOrderByRelevanceInput;
