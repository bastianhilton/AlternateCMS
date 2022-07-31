"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertOneSettingshopResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const UpsertOneSettingshopArgs_1 = require("./args/UpsertOneSettingshopArgs");
const Settingshop_1 = require("../../../models/Settingshop");
const helpers_1 = require("../../../helpers");
let UpsertOneSettingshopResolver = class UpsertOneSettingshopResolver {
    async upsertOneSettingshop(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).settingshop.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Settingshop_1.Settingshop, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpsertOneSettingshopArgs_1.UpsertOneSettingshopArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UpsertOneSettingshopResolver.prototype, "upsertOneSettingshop", null);
UpsertOneSettingshopResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Settingshop_1.Settingshop)
], UpsertOneSettingshopResolver);
exports.UpsertOneSettingshopResolver = UpsertOneSettingshopResolver;
