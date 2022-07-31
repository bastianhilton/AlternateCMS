"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManySettingsgeneralArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SettingsgeneralUpdateManyMutationInput_1 = require("../../../inputs/SettingsgeneralUpdateManyMutationInput");
const SettingsgeneralWhereInput_1 = require("../../../inputs/SettingsgeneralWhereInput");
let UpdateManySettingsgeneralArgs = class UpdateManySettingsgeneralArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SettingsgeneralUpdateManyMutationInput_1.SettingsgeneralUpdateManyMutationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", SettingsgeneralUpdateManyMutationInput_1.SettingsgeneralUpdateManyMutationInput)
], UpdateManySettingsgeneralArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SettingsgeneralWhereInput_1.SettingsgeneralWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SettingsgeneralWhereInput_1.SettingsgeneralWhereInput)
], UpdateManySettingsgeneralArgs.prototype, "where", void 0);
UpdateManySettingsgeneralArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateManySettingsgeneralArgs);
exports.UpdateManySettingsgeneralArgs = UpdateManySettingsgeneralArgs;
