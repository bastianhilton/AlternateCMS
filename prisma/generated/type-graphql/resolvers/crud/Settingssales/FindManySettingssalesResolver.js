"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindManySettingssalesResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const FindManySettingssalesArgs_1 = require("./args/FindManySettingssalesArgs");
const Settingssales_1 = require("../../../models/Settingssales");
const helpers_1 = require("../../../helpers");
let FindManySettingssalesResolver = class FindManySettingssalesResolver {
    async findManySettingssales(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).settingssales.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [Settingssales_1.Settingssales], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindManySettingssalesArgs_1.FindManySettingssalesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindManySettingssalesResolver.prototype, "findManySettingssales", null);
FindManySettingssalesResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Settingssales_1.Settingssales)
], FindManySettingssalesResolver);
exports.FindManySettingssalesResolver = FindManySettingssalesResolver;
