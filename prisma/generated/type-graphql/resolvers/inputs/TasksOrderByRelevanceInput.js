"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TasksOrderByRelevanceInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
const TasksOrderByRelevanceFieldEnum_1 = require("../../enums/TasksOrderByRelevanceFieldEnum");
let TasksOrderByRelevanceInput = class TasksOrderByRelevanceInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TasksOrderByRelevanceFieldEnum_1.TasksOrderByRelevanceFieldEnum], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], TasksOrderByRelevanceInput.prototype, "fields", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], TasksOrderByRelevanceInput.prototype, "sort", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], TasksOrderByRelevanceInput.prototype, "search", void 0);
TasksOrderByRelevanceInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TasksOrderByRelevanceInput", {
        isAbstract: true
    })
], TasksOrderByRelevanceInput);
exports.TasksOrderByRelevanceInput = TasksOrderByRelevanceInput;
