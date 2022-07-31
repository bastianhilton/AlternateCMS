"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateSettingssalesResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const AggregateSettingssalesArgs_1 = require("./args/AggregateSettingssalesArgs");
const Settingssales_1 = require("../../../models/Settingssales");
const AggregateSettingssales_1 = require("../../outputs/AggregateSettingssales");
const helpers_1 = require("../../../helpers");
let AggregateSettingssalesResolver = class AggregateSettingssalesResolver {
    async aggregateSettingssales(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).settingssales.aggregate({
            ...args,
            ...(0, helpers_1.transformFields)((0, graphql_fields_1.default)(info)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateSettingssales_1.AggregateSettingssales, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateSettingssalesArgs_1.AggregateSettingssalesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], AggregateSettingssalesResolver.prototype, "aggregateSettingssales", null);
AggregateSettingssalesResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Settingssales_1.Settingssales)
], AggregateSettingssalesResolver);
exports.AggregateSettingssalesResolver = AggregateSettingssalesResolver;
