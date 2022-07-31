"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteManySettingshopResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const DeleteManySettingshopArgs_1 = require("./args/DeleteManySettingshopArgs");
const Settingshop_1 = require("../../../models/Settingshop");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const helpers_1 = require("../../../helpers");
let DeleteManySettingshopResolver = class DeleteManySettingshopResolver {
    async deleteManySettingshop(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).settingshop.deleteMany({
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
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteManySettingshopArgs_1.DeleteManySettingshopArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], DeleteManySettingshopResolver.prototype, "deleteManySettingshop", null);
DeleteManySettingshopResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Settingshop_1.Settingshop)
], DeleteManySettingshopResolver);
exports.DeleteManySettingshopResolver = DeleteManySettingshopResolver;
