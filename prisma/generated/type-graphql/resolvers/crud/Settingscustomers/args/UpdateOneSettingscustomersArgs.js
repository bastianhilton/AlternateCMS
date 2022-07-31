"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateOneSettingscustomersArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SettingscustomersUpdateInput_1 = require("../../../inputs/SettingscustomersUpdateInput");
const SettingscustomersWhereUniqueInput_1 = require("../../../inputs/SettingscustomersWhereUniqueInput");
let UpdateOneSettingscustomersArgs = class UpdateOneSettingscustomersArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SettingscustomersUpdateInput_1.SettingscustomersUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", SettingscustomersUpdateInput_1.SettingscustomersUpdateInput)
], UpdateOneSettingscustomersArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SettingscustomersWhereUniqueInput_1.SettingscustomersWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", SettingscustomersWhereUniqueInput_1.SettingscustomersWhereUniqueInput)
], UpdateOneSettingscustomersArgs.prototype, "where", void 0);
UpdateOneSettingscustomersArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateOneSettingscustomersArgs);
exports.UpdateOneSettingscustomersArgs = UpdateOneSettingscustomersArgs;
