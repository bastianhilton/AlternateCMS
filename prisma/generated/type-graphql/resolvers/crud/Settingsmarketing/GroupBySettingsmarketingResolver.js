"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupBySettingsmarketingResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const GroupBySettingsmarketingArgs_1 = require("./args/GroupBySettingsmarketingArgs");
const Settingsmarketing_1 = require("../../../models/Settingsmarketing");
const SettingsmarketingGroupBy_1 = require("../../outputs/SettingsmarketingGroupBy");
const helpers_1 = require("../../../helpers");
let GroupBySettingsmarketingResolver = class GroupBySettingsmarketingResolver {
    async groupBySettingsmarketing(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).settingsmarketing.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [SettingsmarketingGroupBy_1.SettingsmarketingGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupBySettingsmarketingArgs_1.GroupBySettingsmarketingArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], GroupBySettingsmarketingResolver.prototype, "groupBySettingsmarketing", null);
GroupBySettingsmarketingResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Settingsmarketing_1.Settingsmarketing)
], GroupBySettingsmarketingResolver);
exports.GroupBySettingsmarketingResolver = GroupBySettingsmarketingResolver;
