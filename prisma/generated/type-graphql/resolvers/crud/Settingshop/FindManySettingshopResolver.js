"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindManySettingshopResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const FindManySettingshopArgs_1 = require("./args/FindManySettingshopArgs");
const Settingshop_1 = require("../../../models/Settingshop");
const helpers_1 = require("../../../helpers");
let FindManySettingshopResolver = class FindManySettingshopResolver {
    async settingshops(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).settingshop.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [Settingshop_1.Settingshop], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindManySettingshopArgs_1.FindManySettingshopArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindManySettingshopResolver.prototype, "settingshops", null);
FindManySettingshopResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Settingshop_1.Settingshop)
], FindManySettingshopResolver);
exports.FindManySettingshopResolver = FindManySettingshopResolver;
