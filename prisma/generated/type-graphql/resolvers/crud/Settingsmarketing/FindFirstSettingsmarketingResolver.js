"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstSettingsmarketingResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const FindFirstSettingsmarketingArgs_1 = require("./args/FindFirstSettingsmarketingArgs");
const Settingsmarketing_1 = require("../../../models/Settingsmarketing");
const helpers_1 = require("../../../helpers");
let FindFirstSettingsmarketingResolver = class FindFirstSettingsmarketingResolver {
    async findFirstSettingsmarketing(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).settingsmarketing.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Settingsmarketing_1.Settingsmarketing, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstSettingsmarketingArgs_1.FindFirstSettingsmarketingArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindFirstSettingsmarketingResolver.prototype, "findFirstSettingsmarketing", null);
FindFirstSettingsmarketingResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Settingsmarketing_1.Settingsmarketing)
], FindFirstSettingsmarketingResolver);
exports.FindFirstSettingsmarketingResolver = FindFirstSettingsmarketingResolver;
