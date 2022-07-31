"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstSettingshopResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const FindFirstSettingshopArgs_1 = require("./args/FindFirstSettingshopArgs");
const Settingshop_1 = require("../../../models/Settingshop");
const helpers_1 = require("../../../helpers");
let FindFirstSettingshopResolver = class FindFirstSettingshopResolver {
    async findFirstSettingshop(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).settingshop.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Settingshop_1.Settingshop, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstSettingshopArgs_1.FindFirstSettingshopArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindFirstSettingshopResolver.prototype, "findFirstSettingshop", null);
FindFirstSettingshopResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Settingshop_1.Settingshop)
], FindFirstSettingshopResolver);
exports.FindFirstSettingshopResolver = FindFirstSettingshopResolver;
