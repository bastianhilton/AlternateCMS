"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindManySettingsmarketingResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const FindManySettingsmarketingArgs_1 = require("./args/FindManySettingsmarketingArgs");
const Settingsmarketing_1 = require("../../../models/Settingsmarketing");
const helpers_1 = require("../../../helpers");
let FindManySettingsmarketingResolver = class FindManySettingsmarketingResolver {
    async settingsmarketings(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).settingsmarketing.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [Settingsmarketing_1.Settingsmarketing], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindManySettingsmarketingArgs_1.FindManySettingsmarketingArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindManySettingsmarketingResolver.prototype, "settingsmarketings", null);
FindManySettingsmarketingResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Settingsmarketing_1.Settingsmarketing)
], FindManySettingsmarketingResolver);
exports.FindManySettingsmarketingResolver = FindManySettingsmarketingResolver;
