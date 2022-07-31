"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteOneSettingscustomersArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SettingscustomersWhereUniqueInput_1 = require("../../../inputs/SettingscustomersWhereUniqueInput");
let DeleteOneSettingscustomersArgs = class DeleteOneSettingscustomersArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SettingscustomersWhereUniqueInput_1.SettingscustomersWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", SettingscustomersWhereUniqueInput_1.SettingscustomersWhereUniqueInput)
], DeleteOneSettingscustomersArgs.prototype, "where", void 0);
DeleteOneSettingscustomersArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteOneSettingscustomersArgs);
exports.DeleteOneSettingscustomersArgs = DeleteOneSettingscustomersArgs;
