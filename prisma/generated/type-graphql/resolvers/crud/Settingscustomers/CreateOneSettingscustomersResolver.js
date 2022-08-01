"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateOneSettingscustomersResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const CreateOneSettingscustomersArgs_1 = require("./args/CreateOneSettingscustomersArgs");
const Settingscustomers_1 = require("../../../models/Settingscustomers");
const helpers_1 = require("../../../helpers");
let CreateOneSettingscustomersResolver = class CreateOneSettingscustomersResolver {
    async createOneSettingscustomers(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).settingscustomers.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Settingscustomers_1.Settingscustomers, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateOneSettingscustomersArgs_1.CreateOneSettingscustomersArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CreateOneSettingscustomersResolver.prototype, "createOneSettingscustomers", null);
CreateOneSettingscustomersResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Settingscustomers_1.Settingscustomers)
], CreateOneSettingscustomersResolver);
exports.CreateOneSettingscustomersResolver = CreateOneSettingscustomersResolver;