"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteOneGeneral_settingsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const General_settingsWhereUniqueInput_1 = require("../../../inputs/General_settingsWhereUniqueInput");
let DeleteOneGeneral_settingsArgs = class DeleteOneGeneral_settingsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => General_settingsWhereUniqueInput_1.General_settingsWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", General_settingsWhereUniqueInput_1.General_settingsWhereUniqueInput)
], DeleteOneGeneral_settingsArgs.prototype, "where", void 0);
DeleteOneGeneral_settingsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteOneGeneral_settingsArgs);
exports.DeleteOneGeneral_settingsArgs = DeleteOneGeneral_settingsArgs;
