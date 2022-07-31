"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateOneTasksArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TasksCreateInput_1 = require("../../../inputs/TasksCreateInput");
let CreateOneTasksArgs = class CreateOneTasksArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TasksCreateInput_1.TasksCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TasksCreateInput_1.TasksCreateInput)
], CreateOneTasksArgs.prototype, "data", void 0);
CreateOneTasksArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateOneTasksArgs);
exports.CreateOneTasksArgs = CreateOneTasksArgs;
