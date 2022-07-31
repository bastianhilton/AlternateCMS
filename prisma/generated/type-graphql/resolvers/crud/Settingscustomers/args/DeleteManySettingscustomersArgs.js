"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteManySettingscustomersArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SettingscustomersWhereInput_1 = require("../../../inputs/SettingscustomersWhereInput");
let DeleteManySettingscustomersArgs = class DeleteManySettingscustomersArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SettingscustomersWhereInput_1.SettingscustomersWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SettingscustomersWhereInput_1.SettingscustomersWhereInput)
], DeleteManySettingscustomersArgs.prototype, "where", void 0);
DeleteManySettingscustomersArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteManySettingscustomersArgs);
exports.DeleteManySettingscustomersArgs = DeleteManySettingscustomersArgs;
