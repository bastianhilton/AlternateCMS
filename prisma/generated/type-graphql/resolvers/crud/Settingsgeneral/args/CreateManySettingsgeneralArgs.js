"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManySettingsgeneralArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SettingsgeneralCreateManyInput_1 = require("../../../inputs/SettingsgeneralCreateManyInput");
let CreateManySettingsgeneralArgs = class CreateManySettingsgeneralArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [SettingsgeneralCreateManyInput_1.SettingsgeneralCreateManyInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], CreateManySettingsgeneralArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], CreateManySettingsgeneralArgs.prototype, "skipDuplicates", void 0);
CreateManySettingsgeneralArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateManySettingsgeneralArgs);
exports.CreateManySettingsgeneralArgs = CreateManySettingsgeneralArgs;
