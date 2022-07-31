"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteOneShop_settingsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Shop_settingsWhereUniqueInput_1 = require("../../../inputs/Shop_settingsWhereUniqueInput");
let DeleteOneShop_settingsArgs = class DeleteOneShop_settingsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Shop_settingsWhereUniqueInput_1.Shop_settingsWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Shop_settingsWhereUniqueInput_1.Shop_settingsWhereUniqueInput)
], DeleteOneShop_settingsArgs.prototype, "where", void 0);
DeleteOneShop_settingsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteOneShop_settingsArgs);
exports.DeleteOneShop_settingsArgs = DeleteOneShop_settingsArgs;
