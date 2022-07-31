"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByCitiesResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const GroupByCitiesArgs_1 = require("./args/GroupByCitiesArgs");
const Cities_1 = require("../../../models/Cities");
const CitiesGroupBy_1 = require("../../outputs/CitiesGroupBy");
const helpers_1 = require("../../../helpers");
let GroupByCitiesResolver = class GroupByCitiesResolver {
    async groupByCities(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).cities.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [CitiesGroupBy_1.CitiesGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupByCitiesArgs_1.GroupByCitiesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], GroupByCitiesResolver.prototype, "groupByCities", null);
GroupByCitiesResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Cities_1.Cities)
], GroupByCitiesResolver);
exports.GroupByCitiesResolver = GroupByCitiesResolver;
