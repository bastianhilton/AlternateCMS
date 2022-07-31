"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManySettingshopArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SettingshopCreateManyInput_1 = require("../../../inputs/SettingshopCreateManyInput");
let CreateManySettingshopArgs = class CreateManySettingshopArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [SettingshopCreateManyInput_1.SettingshopCreateManyInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], CreateManySettingshopArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], CreateManySettingshopArgs.prototype, "skipDuplicates", void 0);
CreateManySettingshopArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateManySettingshopArgs);
exports.CreateManySettingshopArgs = CreateManySettingshopArgs;
