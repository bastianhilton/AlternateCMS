"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateOneShop_settingsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Shop_settingsUpdateInput_1 = require("../../../inputs/Shop_settingsUpdateInput");
const Shop_settingsWhereUniqueInput_1 = require("../../../inputs/Shop_settingsWhereUniqueInput");
let UpdateOneShop_settingsArgs = class UpdateOneShop_settingsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Shop_settingsUpdateInput_1.Shop_settingsUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Shop_settingsUpdateInput_1.Shop_settingsUpdateInput)
], UpdateOneShop_settingsArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Shop_settingsWhereUniqueInput_1.Shop_settingsWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Shop_settingsWhereUniqueInput_1.Shop_settingsWhereUniqueInput)
], UpdateOneShop_settingsArgs.prototype, "where", void 0);
UpdateOneShop_settingsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateOneShop_settingsArgs);
exports.UpdateOneShop_settingsArgs = UpdateOneShop_settingsArgs;
