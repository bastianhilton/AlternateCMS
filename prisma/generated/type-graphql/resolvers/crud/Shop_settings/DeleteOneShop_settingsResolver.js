"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteOneShop_settingsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const DeleteOneShop_settingsArgs_1 = require("./args/DeleteOneShop_settingsArgs");
const Shop_settings_1 = require("../../../models/Shop_settings");
const helpers_1 = require("../../../helpers");
let DeleteOneShop_settingsResolver = class DeleteOneShop_settingsResolver {
    async deleteOneShop_settings(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).shop_settings.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Shop_settings_1.Shop_settings, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteOneShop_settingsArgs_1.DeleteOneShop_settingsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], DeleteOneShop_settingsResolver.prototype, "deleteOneShop_settings", null);
DeleteOneShop_settingsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Shop_settings_1.Shop_settings)
], DeleteOneShop_settingsResolver);
exports.DeleteOneShop_settingsResolver = DeleteOneShop_settingsResolver;
