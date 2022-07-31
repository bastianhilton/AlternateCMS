"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateSettingscustomersResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const AggregateSettingscustomersArgs_1 = require("./args/AggregateSettingscustomersArgs");
const Settingscustomers_1 = require("../../../models/Settingscustomers");
const AggregateSettingscustomers_1 = require("../../outputs/AggregateSettingscustomers");
const helpers_1 = require("../../../helpers");
let AggregateSettingscustomersResolver = class AggregateSettingscustomersResolver {
    async aggregateSettingscustomers(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).settingscustomers.aggregate({
            ...args,
            ...(0, helpers_1.transformFields)((0, graphql_fields_1.default)(info)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateSettingscustomers_1.AggregateSettingscustomers, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateSettingscustomersArgs_1.AggregateSettingscustomersArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], AggregateSettingscustomersResolver.prototype, "aggregateSettingscustomers", null);
AggregateSettingscustomersResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Settingscustomers_1.Settingscustomers)
], AggregateSettingscustomersResolver);
exports.AggregateSettingscustomersResolver = AggregateSettingscustomersResolver;
