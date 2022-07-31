"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertOneTasksArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TasksCreateInput_1 = require("../../../inputs/TasksCreateInput");
const TasksUpdateInput_1 = require("../../../inputs/TasksUpdateInput");
const TasksWhereUniqueInput_1 = require("../../../inputs/TasksWhereUniqueInput");
let UpsertOneTasksArgs = class UpsertOneTasksArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TasksWhereUniqueInput_1.TasksWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TasksWhereUniqueInput_1.TasksWhereUniqueInput)
], UpsertOneTasksArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TasksCreateInput_1.TasksCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TasksCreateInput_1.TasksCreateInput)
], UpsertOneTasksArgs.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TasksUpdateInput_1.TasksUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TasksUpdateInput_1.TasksUpdateInput)
], UpsertOneTasksArgs.prototype, "update", void 0);
UpsertOneTasksArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpsertOneTasksArgs);
exports.UpsertOneTasksArgs = UpsertOneTasksArgs;
