"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateOneSettingsgeneralArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SettingsgeneralCreateInput_1 = require("../../../inputs/SettingsgeneralCreateInput");
let CreateOneSettingsgeneralArgs = class CreateOneSettingsgeneralArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SettingsgeneralCreateInput_1.SettingsgeneralCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", SettingsgeneralCreateInput_1.SettingsgeneralCreateInput)
], CreateOneSettingsgeneralArgs.prototype, "data", void 0);
CreateOneSettingsgeneralArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateOneSettingsgeneralArgs);
exports.CreateOneSettingsgeneralArgs = CreateOneSettingsgeneralArgs;
