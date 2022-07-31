"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteOneTasksArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TasksWhereUniqueInput_1 = require("../../../inputs/TasksWhereUniqueInput");
let DeleteOneTasksArgs = class DeleteOneTasksArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TasksWhereUniqueInput_1.TasksWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TasksWhereUniqueInput_1.TasksWhereUniqueInput)
], DeleteOneTasksArgs.prototype, "where", void 0);
DeleteOneTasksArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteOneTasksArgs);
exports.DeleteOneTasksArgs = DeleteOneTasksArgs;
