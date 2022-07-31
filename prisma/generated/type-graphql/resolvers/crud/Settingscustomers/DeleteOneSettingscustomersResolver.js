"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteOneSettingscustomersResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const DeleteOneSettingscustomersArgs_1 = require("./args/DeleteOneSettingscustomersArgs");
const Settingscustomers_1 = require("../../../models/Settingscustomers");
const helpers_1 = require("../../../helpers");
let DeleteOneSettingscustomersResolver = class DeleteOneSettingscustomersResolver {
    async deleteOneSettingscustomers(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).settingscustomers.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Settingscustomers_1.Settingscustomers, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteOneSettingscustomersArgs_1.DeleteOneSettingscustomersArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], DeleteOneSettingscustomersResolver.prototype, "deleteOneSettingscustomers", null);
DeleteOneSettingscustomersResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Settingscustomers_1.Settingscustomers)
], DeleteOneSettingscustomersResolver);
exports.DeleteOneSettingscustomersResolver = DeleteOneSettingscustomersResolver;
