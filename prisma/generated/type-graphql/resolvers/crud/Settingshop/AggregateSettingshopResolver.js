"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateSettingshopResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const AggregateSettingshopArgs_1 = require("./args/AggregateSettingshopArgs");
const Settingshop_1 = require("../../../models/Settingshop");
const AggregateSettingshop_1 = require("../../outputs/AggregateSettingshop");
const helpers_1 = require("../../../helpers");
let AggregateSettingshopResolver = class AggregateSettingshopResolver {
    async aggregateSettingshop(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).settingshop.aggregate({
            ...args,
            ...(0, helpers_1.transformFields)((0, graphql_fields_1.default)(info)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateSettingshop_1.AggregateSettingshop, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateSettingshopArgs_1.AggregateSettingshopArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], AggregateSettingshopResolver.prototype, "aggregateSettingshop", null);
AggregateSettingshopResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Settingshop_1.Settingshop)
], AggregateSettingshopResolver);
exports.AggregateSettingshopResolver = AggregateSettingshopResolver;
