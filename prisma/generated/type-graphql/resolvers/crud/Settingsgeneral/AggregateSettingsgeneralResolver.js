"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateSettingsgeneralResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const AggregateSettingsgeneralArgs_1 = require("./args/AggregateSettingsgeneralArgs");
const Settingsgeneral_1 = require("../../../models/Settingsgeneral");
const AggregateSettingsgeneral_1 = require("../../outputs/AggregateSettingsgeneral");
const helpers_1 = require("../../../helpers");
let AggregateSettingsgeneralResolver = class AggregateSettingsgeneralResolver {
    async aggregateSettingsgeneral(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).settingsgeneral.aggregate({
            ...args,
            ...(0, helpers_1.transformFields)((0, graphql_fields_1.default)(info)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateSettingsgeneral_1.AggregateSettingsgeneral, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateSettingsgeneralArgs_1.AggregateSettingsgeneralArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], AggregateSettingsgeneralResolver.prototype, "aggregateSettingsgeneral", null);
AggregateSettingsgeneralResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Settingsgeneral_1.Settingsgeneral)
], AggregateSettingsgeneralResolver);
exports.AggregateSettingsgeneralResolver = AggregateSettingsgeneralResolver;
