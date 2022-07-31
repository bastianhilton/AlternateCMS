"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertOneShop_settingsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const UpsertOneShop_settingsArgs_1 = require("./args/UpsertOneShop_settingsArgs");
const Shop_settings_1 = require("../../../models/Shop_settings");
const helpers_1 = require("../../../helpers");
let UpsertOneShop_settingsResolver = class UpsertOneShop_settingsResolver {
    async upsertOneShop_settings(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).shop_settings.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Shop_settings_1.Shop_settings, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpsertOneShop_settingsArgs_1.UpsertOneShop_settingsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UpsertOneShop_settingsResolver.prototype, "upsertOneShop_settings", null);
UpsertOneShop_settingsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Shop_settings_1.Shop_settings)
], UpsertOneShop_settingsResolver);
exports.UpsertOneShop_settingsResolver = UpsertOneShop_settingsResolver;
