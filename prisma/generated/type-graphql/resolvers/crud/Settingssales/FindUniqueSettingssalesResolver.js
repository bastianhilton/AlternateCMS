"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueSettingssalesResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const FindUniqueSettingssalesArgs_1 = require("./args/FindUniqueSettingssalesArgs");
const Settingssales_1 = require("../../../models/Settingssales");
const helpers_1 = require("../../../helpers");
let FindUniqueSettingssalesResolver = class FindUniqueSettingssalesResolver {
    async findUniqueSettingssales(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).settingssales.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Settingssales_1.Settingssales, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueSettingssalesArgs_1.FindUniqueSettingssalesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindUniqueSettingssalesResolver.prototype, "findUniqueSettingssales", null);
FindUniqueSettingssalesResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Settingssales_1.Settingssales)
], FindUniqueSettingssalesResolver);
exports.FindUniqueSettingssalesResolver = FindUniqueSettingssalesResolver;
