"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManySettingscustomersArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SettingscustomersCreateManyInput_1 = require("../../../inputs/SettingscustomersCreateManyInput");
let CreateManySettingscustomersArgs = class CreateManySettingscustomersArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [SettingscustomersCreateManyInput_1.SettingscustomersCreateManyInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], CreateManySettingscustomersArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], CreateManySettingscustomersArgs.prototype, "skipDuplicates", void 0);
CreateManySettingscustomersArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateManySettingscustomersArgs);
exports.CreateManySettingscustomersArgs = CreateManySettingscustomersArgs;
