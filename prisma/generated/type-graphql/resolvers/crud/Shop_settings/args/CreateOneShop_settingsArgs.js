"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateOneShop_settingsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Shop_settingsCreateInput_1 = require("../../../inputs/Shop_settingsCreateInput");
let CreateOneShop_settingsArgs = class CreateOneShop_settingsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Shop_settingsCreateInput_1.Shop_settingsCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Shop_settingsCreateInput_1.Shop_settingsCreateInput)
], CreateOneShop_settingsArgs.prototype, "data", void 0);
CreateOneShop_settingsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateOneShop_settingsArgs);
exports.CreateOneShop_settingsArgs = CreateOneShop_settingsArgs;
