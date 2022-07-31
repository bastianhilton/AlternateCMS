"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertOneSettingscustomersArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SettingscustomersCreateInput_1 = require("../../../inputs/SettingscustomersCreateInput");
const SettingscustomersUpdateInput_1 = require("../../../inputs/SettingscustomersUpdateInput");
const SettingscustomersWhereUniqueInput_1 = require("../../../inputs/SettingscustomersWhereUniqueInput");
let UpsertOneSettingscustomersArgs = class UpsertOneSettingscustomersArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SettingscustomersWhereUniqueInput_1.SettingscustomersWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", SettingscustomersWhereUniqueInput_1.SettingscustomersWhereUniqueInput)
], UpsertOneSettingscustomersArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SettingscustomersCreateInput_1.SettingscustomersCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", SettingscustomersCreateInput_1.SettingscustomersCreateInput)
], UpsertOneSettingscustomersArgs.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SettingscustomersUpdateInput_1.SettingscustomersUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", SettingscustomersUpdateInput_1.SettingscustomersUpdateInput)
], UpsertOneSettingscustomersArgs.prototype, "update", void 0);
UpsertOneSettingscustomersArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpsertOneSettingscustomersArgs);
exports.UpsertOneSettingscustomersArgs = UpsertOneSettingscustomersArgs;
