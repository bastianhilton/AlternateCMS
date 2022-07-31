"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertOneSettingshopArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SettingshopCreateInput_1 = require("../../../inputs/SettingshopCreateInput");
const SettingshopUpdateInput_1 = require("../../../inputs/SettingshopUpdateInput");
const SettingshopWhereUniqueInput_1 = require("../../../inputs/SettingshopWhereUniqueInput");
let UpsertOneSettingshopArgs = class UpsertOneSettingshopArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SettingshopWhereUniqueInput_1.SettingshopWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", SettingshopWhereUniqueInput_1.SettingshopWhereUniqueInput)
], UpsertOneSettingshopArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SettingshopCreateInput_1.SettingshopCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", SettingshopCreateInput_1.SettingshopCreateInput)
], UpsertOneSettingshopArgs.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SettingshopUpdateInput_1.SettingshopUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", SettingshopUpdateInput_1.SettingshopUpdateInput)
], UpsertOneSettingshopArgs.prototype, "update", void 0);
UpsertOneSettingshopArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpsertOneSettingshopArgs);
exports.UpsertOneSettingshopArgs = UpsertOneSettingshopArgs;
