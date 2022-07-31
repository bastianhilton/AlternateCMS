"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateOneSettingshopArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SettingshopCreateInput_1 = require("../../../inputs/SettingshopCreateInput");
let CreateOneSettingshopArgs = class CreateOneSettingshopArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SettingshopCreateInput_1.SettingshopCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", SettingshopCreateInput_1.SettingshopCreateInput)
], CreateOneSettingshopArgs.prototype, "data", void 0);
CreateOneSettingshopArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateOneSettingshopArgs);
exports.CreateOneSettingshopArgs = CreateOneSettingshopArgs;
