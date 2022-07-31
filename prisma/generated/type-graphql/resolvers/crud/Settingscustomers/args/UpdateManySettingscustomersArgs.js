"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManySettingscustomersArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SettingscustomersUpdateManyMutationInput_1 = require("../../../inputs/SettingscustomersUpdateManyMutationInput");
const SettingscustomersWhereInput_1 = require("../../../inputs/SettingscustomersWhereInput");
let UpdateManySettingscustomersArgs = class UpdateManySettingscustomersArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SettingscustomersUpdateManyMutationInput_1.SettingscustomersUpdateManyMutationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", SettingscustomersUpdateManyMutationInput_1.SettingscustomersUpdateManyMutationInput)
], UpdateManySettingscustomersArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SettingscustomersWhereInput_1.SettingscustomersWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SettingscustomersWhereInput_1.SettingscustomersWhereInput)
], UpdateManySettingscustomersArgs.prototype, "where", void 0);
UpdateManySettingscustomersArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateManySettingscustomersArgs);
exports.UpdateManySettingscustomersArgs = UpdateManySettingscustomersArgs;
