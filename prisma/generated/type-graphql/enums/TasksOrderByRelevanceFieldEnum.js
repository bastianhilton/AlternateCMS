"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TasksOrderByRelevanceFieldEnum = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var TasksOrderByRelevanceFieldEnum;
(function (TasksOrderByRelevanceFieldEnum) {
    TasksOrderByRelevanceFieldEnum["subject"] = "subject";
    TasksOrderByRelevanceFieldEnum["start_date"] = "start_date";
    TasksOrderByRelevanceFieldEnum["due_date"] = "due_date";
    TasksOrderByRelevanceFieldEnum["priority"] = "priority";
    TasksOrderByRelevanceFieldEnum["description"] = "description";
    TasksOrderByRelevanceFieldEnum["status"] = "status";
    TasksOrderByRelevanceFieldEnum["related_to"] = "related_to";
    TasksOrderByRelevanceFieldEnum["contact"] = "contact";
    TasksOrderByRelevanceFieldEnum["assigned_to"] = "assigned_to";
    TasksOrderByRelevanceFieldEnum["mediamanager"] = "mediamanager";
    TasksOrderByRelevanceFieldEnum["projects"] = "projects";
    TasksOrderByRelevanceFieldEnum["workspaces"] = "workspaces";
})(TasksOrderByRelevanceFieldEnum = exports.TasksOrderByRelevanceFieldEnum || (exports.TasksOrderByRelevanceFieldEnum = {}));
TypeGraphQL.registerEnumType(TasksOrderByRelevanceFieldEnum, {
    name: "TasksOrderByRelevanceFieldEnum",
    description: undefined,
});
