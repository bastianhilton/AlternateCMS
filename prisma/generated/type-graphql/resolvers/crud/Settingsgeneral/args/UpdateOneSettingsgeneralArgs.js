"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateOneSettingsgeneralArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SettingsgeneralUpdateInput_1 = require("../../../inputs/SettingsgeneralUpdateInput");
const SettingsgeneralWhereUniqueInput_1 = require("../../../inputs/SettingsgeneralWhereUniqueInput");
let UpdateOneSettingsgeneralArgs = class UpdateOneSettingsgeneralArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SettingsgeneralUpdateInput_1.SettingsgeneralUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", SettingsgeneralUpdateInput_1.SettingsgeneralUpdateInput)
], UpdateOneSettingsgeneralArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SettingsgeneralWhereUniqueInput_1.SettingsgeneralWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", SettingsgeneralWhereUniqueInput_1.SettingsgeneralWhereUniqueInput)
], UpdateOneSettingsgeneralArgs.prototype, "where", void 0);
UpdateOneSettingsgeneralArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateOneSettingsgeneralArgs);
exports.UpdateOneSettingsgeneralArgs = UpdateOneSettingsgeneralArgs;
