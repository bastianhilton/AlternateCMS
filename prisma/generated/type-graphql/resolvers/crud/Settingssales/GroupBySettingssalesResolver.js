"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupBySettingssalesResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const GroupBySettingssalesArgs_1 = require("./args/GroupBySettingssalesArgs");
const Settingssales_1 = require("../../../models/Settingssales");
const SettingssalesGroupBy_1 = require("../../outputs/SettingssalesGroupBy");
const helpers_1 = require("../../../helpers");
let GroupBySettingssalesResolver = class GroupBySettingssalesResolver {
    async groupBySettingssales(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).settingssales.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [SettingssalesGroupBy_1.SettingssalesGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupBySettingssalesArgs_1.GroupBySettingssalesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], GroupBySettingssalesResolver.prototype, "groupBySettingssales", null);
GroupBySettingssalesResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Settingssales_1.Settingssales)
], GroupBySettingssalesResolver);
exports.GroupBySettingssalesResolver = GroupBySettingssalesResolver;
