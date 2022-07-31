"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByOccassionsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const GroupByOccassionsArgs_1 = require("./args/GroupByOccassionsArgs");
const Occassions_1 = require("../../../models/Occassions");
const OccassionsGroupBy_1 = require("../../outputs/OccassionsGroupBy");
const helpers_1 = require("../../../helpers");
let GroupByOccassionsResolver = class GroupByOccassionsResolver {
    async groupByOccassions(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).occassions.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [OccassionsGroupBy_1.OccassionsGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupByOccassionsArgs_1.GroupByOccassionsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], GroupByOccassionsResolver.prototype, "groupByOccassions", null);
GroupByOccassionsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Occassions_1.Occassions)
], GroupByOccassionsResolver);
exports.GroupByOccassionsResolver = GroupByOccassionsResolver;
