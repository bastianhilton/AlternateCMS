"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManySettingshopArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SettingshopUpdateManyMutationInput_1 = require("../../../inputs/SettingshopUpdateManyMutationInput");
const SettingshopWhereInput_1 = require("../../../inputs/SettingshopWhereInput");
let UpdateManySettingshopArgs = class UpdateManySettingshopArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SettingshopUpdateManyMutationInput_1.SettingshopUpdateManyMutationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", SettingshopUpdateManyMutationInput_1.SettingshopUpdateManyMutationInput)
], UpdateManySettingshopArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SettingshopWhereInput_1.SettingshopWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SettingshopWhereInput_1.SettingshopWhereInput)
], UpdateManySettingshopArgs.prototype, "where", void 0);
UpdateManySettingshopArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateManySettingshopArgs);
exports.UpdateManySettingshopArgs = UpdateManySettingshopArgs;
