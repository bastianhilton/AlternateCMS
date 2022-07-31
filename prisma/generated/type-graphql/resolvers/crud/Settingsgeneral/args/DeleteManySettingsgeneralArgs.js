"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteManySettingsgeneralArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SettingsgeneralWhereInput_1 = require("../../../inputs/SettingsgeneralWhereInput");
let DeleteManySettingsgeneralArgs = class DeleteManySettingsgeneralArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SettingsgeneralWhereInput_1.SettingsgeneralWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SettingsgeneralWhereInput_1.SettingsgeneralWhereInput)
], DeleteManySettingsgeneralArgs.prototype, "where", void 0);
DeleteManySettingsgeneralArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteManySettingsgeneralArgs);
exports.DeleteManySettingsgeneralArgs = DeleteManySettingsgeneralArgs;
