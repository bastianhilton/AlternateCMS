"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupBySettingshopResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const GroupBySettingshopArgs_1 = require("./args/GroupBySettingshopArgs");
const Settingshop_1 = require("../../../models/Settingshop");
const SettingshopGroupBy_1 = require("../../outputs/SettingshopGroupBy");
const helpers_1 = require("../../../helpers");
let GroupBySettingshopResolver = class GroupBySettingshopResolver {
    async groupBySettingshop(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).settingshop.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [SettingshopGroupBy_1.SettingshopGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupBySettingshopArgs_1.GroupBySettingshopArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], GroupBySettingshopResolver.prototype, "groupBySettingshop", null);
GroupBySettingshopResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Settingshop_1.Settingshop)
], GroupBySettingshopResolver);
exports.GroupBySettingshopResolver = GroupBySettingshopResolver;
