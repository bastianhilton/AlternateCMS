"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateSettingsmarketingResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const AggregateSettingsmarketingArgs_1 = require("./args/AggregateSettingsmarketingArgs");
const Settingsmarketing_1 = require("../../../models/Settingsmarketing");
const AggregateSettingsmarketing_1 = require("../../outputs/AggregateSettingsmarketing");
const helpers_1 = require("../../../helpers");
let AggregateSettingsmarketingResolver = class AggregateSettingsmarketingResolver {
    async aggregateSettingsmarketing(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).settingsmarketing.aggregate({
            ...args,
            ...(0, helpers_1.transformFields)((0, graphql_fields_1.default)(info)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateSettingsmarketing_1.AggregateSettingsmarketing, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateSettingsmarketingArgs_1.AggregateSettingsmarketingArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], AggregateSettingsmarketingResolver.prototype, "aggregateSettingsmarketing", null);
AggregateSettingsmarketingResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Settingsmarketing_1.Settingsmarketing)
], AggregateSettingsmarketingResolver);
exports.AggregateSettingsmarketingResolver = AggregateSettingsmarketingResolver;
