"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertOneSettingsgeneralResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const UpsertOneSettingsgeneralArgs_1 = require("./args/UpsertOneSettingsgeneralArgs");
const Settingsgeneral_1 = require("../../../models/Settingsgeneral");
const helpers_1 = require("../../../helpers");
let UpsertOneSettingsgeneralResolver = class UpsertOneSettingsgeneralResolver {
    async upsertOneSettingsgeneral(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).settingsgeneral.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Settingsgeneral_1.Settingsgeneral, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpsertOneSettingsgeneralArgs_1.UpsertOneSettingsgeneralArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UpsertOneSettingsgeneralResolver.prototype, "upsertOneSettingsgeneral", null);
UpsertOneSettingsgeneralResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Settingsgeneral_1.Settingsgeneral)
], UpsertOneSettingsgeneralResolver);
exports.UpsertOneSettingsgeneralResolver = UpsertOneSettingsgeneralResolver;
