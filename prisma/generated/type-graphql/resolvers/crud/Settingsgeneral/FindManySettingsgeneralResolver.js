"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindManySettingsgeneralResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const FindManySettingsgeneralArgs_1 = require("./args/FindManySettingsgeneralArgs");
const Settingsgeneral_1 = require("../../../models/Settingsgeneral");
const helpers_1 = require("../../../helpers");
let FindManySettingsgeneralResolver = class FindManySettingsgeneralResolver {
    async settingsgenerals(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).settingsgeneral.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [Settingsgeneral_1.Settingsgeneral], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindManySettingsgeneralArgs_1.FindManySettingsgeneralArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindManySettingsgeneralResolver.prototype, "settingsgenerals", null);
FindManySettingsgeneralResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Settingsgeneral_1.Settingsgeneral)
], FindManySettingsgeneralResolver);
exports.FindManySettingsgeneralResolver = FindManySettingsgeneralResolver;
