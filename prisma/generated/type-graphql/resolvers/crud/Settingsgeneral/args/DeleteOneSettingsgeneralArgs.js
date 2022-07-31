"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteOneSettingsgeneralArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SettingsgeneralWhereUniqueInput_1 = require("../../../inputs/SettingsgeneralWhereUniqueInput");
let DeleteOneSettingsgeneralArgs = class DeleteOneSettingsgeneralArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SettingsgeneralWhereUniqueInput_1.SettingsgeneralWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", SettingsgeneralWhereUniqueInput_1.SettingsgeneralWhereUniqueInput)
], DeleteOneSettingsgeneralArgs.prototype, "where", void 0);
DeleteOneSettingsgeneralArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteOneSettingsgeneralArgs);
exports.DeleteOneSettingsgeneralArgs = DeleteOneSettingsgeneralArgs;
