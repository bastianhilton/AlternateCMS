"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateOneTasksArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TasksUpdateInput_1 = require("../../../inputs/TasksUpdateInput");
const TasksWhereUniqueInput_1 = require("../../../inputs/TasksWhereUniqueInput");
let UpdateOneTasksArgs = class UpdateOneTasksArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TasksUpdateInput_1.TasksUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TasksUpdateInput_1.TasksUpdateInput)
], UpdateOneTasksArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TasksWhereUniqueInput_1.TasksWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TasksWhereUniqueInput_1.TasksWhereUniqueInput)
], UpdateOneTasksArgs.prototype, "where", void 0);
UpdateOneTasksArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateOneTasksArgs);
exports.UpdateOneTasksArgs = UpdateOneTasksArgs;
