"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManySettingssalesResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const UpdateManySettingssalesArgs_1 = require("./args/UpdateManySettingssalesArgs");
const Settingssales_1 = require("../../../models/Settingssales");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const helpers_1 = require("../../../helpers");
let UpdateManySettingssalesResolver = class UpdateManySettingssalesResolver {
    async updateManySettingssales(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).settingssales.updateMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateManySettingssalesArgs_1.UpdateManySettingssalesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UpdateManySettingssalesResolver.prototype, "updateManySettingssales", null);
UpdateManySettingssalesResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Settingssales_1.Settingssales)
], UpdateManySettingssalesResolver);
exports.UpdateManySettingssalesResolver = UpdateManySettingssalesResolver;
