"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertOneShop_settingsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Shop_settingsCreateInput_1 = require("../../../inputs/Shop_settingsCreateInput");
const Shop_settingsUpdateInput_1 = require("../../../inputs/Shop_settingsUpdateInput");
const Shop_settingsWhereUniqueInput_1 = require("../../../inputs/Shop_settingsWhereUniqueInput");
let UpsertOneShop_settingsArgs = class UpsertOneShop_settingsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Shop_settingsWhereUniqueInput_1.Shop_settingsWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Shop_settingsWhereUniqueInput_1.Shop_settingsWhereUniqueInput)
], UpsertOneShop_settingsArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Shop_settingsCreateInput_1.Shop_settingsCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Shop_settingsCreateInput_1.Shop_settingsCreateInput)
], UpsertOneShop_settingsArgs.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Shop_settingsUpdateInput_1.Shop_settingsUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Shop_settingsUpdateInput_1.Shop_settingsUpdateInput)
], UpsertOneShop_settingsArgs.prototype, "update", void 0);
UpsertOneShop_settingsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpsertOneShop_settingsArgs);
exports.UpsertOneShop_settingsArgs = UpsertOneShop_settingsArgs;
