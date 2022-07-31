"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertOneSettingsgeneralArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SettingsgeneralCreateInput_1 = require("../../../inputs/SettingsgeneralCreateInput");
const SettingsgeneralUpdateInput_1 = require("../../../inputs/SettingsgeneralUpdateInput");
const SettingsgeneralWhereUniqueInput_1 = require("../../../inputs/SettingsgeneralWhereUniqueInput");
let UpsertOneSettingsgeneralArgs = class UpsertOneSettingsgeneralArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SettingsgeneralWhereUniqueInput_1.SettingsgeneralWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", SettingsgeneralWhereUniqueInput_1.SettingsgeneralWhereUniqueInput)
], UpsertOneSettingsgeneralArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SettingsgeneralCreateInput_1.SettingsgeneralCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", SettingsgeneralCreateInput_1.SettingsgeneralCreateInput)
], UpsertOneSettingsgeneralArgs.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SettingsgeneralUpdateInput_1.SettingsgeneralUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", SettingsgeneralUpdateInput_1.SettingsgeneralUpdateInput)
], UpsertOneSettingsgeneralArgs.prototype, "update", void 0);
UpsertOneSettingsgeneralArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpsertOneSettingsgeneralArgs);
exports.UpsertOneSettingsgeneralArgs = UpsertOneSettingsgeneralArgs;
