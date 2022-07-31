"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueSettingsgeneralArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SettingsgeneralWhereUniqueInput_1 = require("../../../inputs/SettingsgeneralWhereUniqueInput");
let FindUniqueSettingsgeneralArgs = class FindUniqueSettingsgeneralArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SettingsgeneralWhereUniqueInput_1.SettingsgeneralWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", SettingsgeneralWhereUniqueInput_1.SettingsgeneralWhereUniqueInput)
], FindUniqueSettingsgeneralArgs.prototype, "where", void 0);
FindUniqueSettingsgeneralArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindUniqueSettingsgeneralArgs);
exports.FindUniqueSettingsgeneralArgs = FindUniqueSettingsgeneralArgs;
