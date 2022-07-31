"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateOneGeneral_settingsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const General_settingsCreateInput_1 = require("../../../inputs/General_settingsCreateInput");
let CreateOneGeneral_settingsArgs = class CreateOneGeneral_settingsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => General_settingsCreateInput_1.General_settingsCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", General_settingsCreateInput_1.General_settingsCreateInput)
], CreateOneGeneral_settingsArgs.prototype, "data", void 0);
CreateOneGeneral_settingsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateOneGeneral_settingsArgs);
exports.CreateOneGeneral_settingsArgs = CreateOneGeneral_settingsArgs;
