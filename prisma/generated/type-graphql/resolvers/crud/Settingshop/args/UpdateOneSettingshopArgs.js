"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateOneSettingshopArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SettingshopUpdateInput_1 = require("../../../inputs/SettingshopUpdateInput");
const SettingshopWhereUniqueInput_1 = require("../../../inputs/SettingshopWhereUniqueInput");
let UpdateOneSettingshopArgs = class UpdateOneSettingshopArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SettingshopUpdateInput_1.SettingshopUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", SettingshopUpdateInput_1.SettingshopUpdateInput)
], UpdateOneSettingshopArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SettingshopWhereUniqueInput_1.SettingshopWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", SettingshopWhereUniqueInput_1.SettingshopWhereUniqueInput)
], UpdateOneSettingshopArgs.prototype, "where", void 0);
UpdateOneSettingshopArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateOneSettingshopArgs);
exports.UpdateOneSettingshopArgs = UpdateOneSettingshopArgs;
