"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteOneSettingshopResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const DeleteOneSettingshopArgs_1 = require("./args/DeleteOneSettingshopArgs");
const Settingshop_1 = require("../../../models/Settingshop");
const helpers_1 = require("../../../helpers");
let DeleteOneSettingshopResolver = class DeleteOneSettingshopResolver {
    async deleteOneSettingshop(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).settingshop.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Settingshop_1.Settingshop, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteOneSettingshopArgs_1.DeleteOneSettingshopArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], DeleteOneSettingshopResolver.prototype, "deleteOneSettingshop", null);
DeleteOneSettingshopResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Settingshop_1.Settingshop)
], DeleteOneSettingshopResolver);
exports.DeleteOneSettingshopResolver = DeleteOneSettingshopResolver;
