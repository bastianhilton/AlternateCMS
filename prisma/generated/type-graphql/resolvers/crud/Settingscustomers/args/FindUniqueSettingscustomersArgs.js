"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueSettingscustomersArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SettingscustomersWhereUniqueInput_1 = require("../../../inputs/SettingscustomersWhereUniqueInput");
let FindUniqueSettingscustomersArgs = class FindUniqueSettingscustomersArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SettingscustomersWhereUniqueInput_1.SettingscustomersWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", SettingscustomersWhereUniqueInput_1.SettingscustomersWhereUniqueInput)
], FindUniqueSettingscustomersArgs.prototype, "where", void 0);
FindUniqueSettingscustomersArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindUniqueSettingscustomersArgs);
exports.FindUniqueSettingscustomersArgs = FindUniqueSettingscustomersArgs;
