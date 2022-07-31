"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateOneSettingscustomersResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const UpdateOneSettingscustomersArgs_1 = require("./args/UpdateOneSettingscustomersArgs");
const Settingscustomers_1 = require("../../../models/Settingscustomers");
const helpers_1 = require("../../../helpers");
let UpdateOneSettingscustomersResolver = class UpdateOneSettingscustomersResolver {
    async updateOneSettingscustomers(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).settingscustomers.update({
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
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateOneSettingscustomersArgs_1.UpdateOneSettingscustomersArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UpdateOneSettingscustomersResolver.prototype, "updateOneSettingscustomers", null);
UpdateOneSettingscustomersResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Settingscustomers_1.Settingscustomers)
], UpdateOneSettingscustomersResolver);
exports.UpdateOneSettingscustomersResolver = UpdateOneSettingscustomersResolver;
