"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteManySettingshopArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SettingshopWhereInput_1 = require("../../../inputs/SettingshopWhereInput");
let DeleteManySettingshopArgs = class DeleteManySettingshopArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SettingshopWhereInput_1.SettingshopWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SettingshopWhereInput_1.SettingshopWhereInput)
], DeleteManySettingshopArgs.prototype, "where", void 0);
DeleteManySettingshopArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteManySettingshopArgs);
exports.DeleteManySettingshopArgs = DeleteManySettingshopArgs;
