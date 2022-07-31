"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateOneSettingscustomersArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SettingscustomersCreateInput_1 = require("../../../inputs/SettingscustomersCreateInput");
let CreateOneSettingscustomersArgs = class CreateOneSettingscustomersArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SettingscustomersCreateInput_1.SettingscustomersCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", SettingscustomersCreateInput_1.SettingscustomersCreateInput)
], CreateOneSettingscustomersArgs.prototype, "data", void 0);
CreateOneSettingscustomersArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateOneSettingscustomersArgs);
exports.CreateOneSettingscustomersArgs = CreateOneSettingscustomersArgs;
