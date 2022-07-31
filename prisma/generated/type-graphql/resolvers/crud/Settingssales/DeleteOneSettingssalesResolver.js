"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteOneSettingssalesResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const DeleteOneSettingssalesArgs_1 = require("./args/DeleteOneSettingssalesArgs");
const Settingssales_1 = require("../../../models/Settingssales");
const helpers_1 = require("../../../helpers");
let DeleteOneSettingssalesResolver = class DeleteOneSettingssalesResolver {
    async deleteOneSettingssales(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).settingssales.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Settingssales_1.Settingssales, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteOneSettingssalesArgs_1.DeleteOneSettingssalesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], DeleteOneSettingssalesResolver.prototype, "deleteOneSettingssales", null);
DeleteOneSettingssalesResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Settingssales_1.Settingssales)
], DeleteOneSettingssalesResolver);
exports.DeleteOneSettingssalesResolver = DeleteOneSettingssalesResolver;
