"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteOneSettingsmarketingResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const DeleteOneSettingsmarketingArgs_1 = require("./args/DeleteOneSettingsmarketingArgs");
const Settingsmarketing_1 = require("../../../models/Settingsmarketing");
const helpers_1 = require("../../../helpers");
let DeleteOneSettingsmarketingResolver = class DeleteOneSettingsmarketingResolver {
    async deleteOneSettingsmarketing(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).settingsmarketing.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Settingsmarketing_1.Settingsmarketing, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteOneSettingsmarketingArgs_1.DeleteOneSettingsmarketingArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], DeleteOneSettingsmarketingResolver.prototype, "deleteOneSettingsmarketing", null);
DeleteOneSettingsmarketingResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Settingsmarketing_1.Settingsmarketing)
], DeleteOneSettingsmarketingResolver);
exports.DeleteOneSettingsmarketingResolver = DeleteOneSettingsmarketingResolver;
