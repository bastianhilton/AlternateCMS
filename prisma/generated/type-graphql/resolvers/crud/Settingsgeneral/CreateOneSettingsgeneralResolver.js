"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateOneSettingsgeneralResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const CreateOneSettingsgeneralArgs_1 = require("./args/CreateOneSettingsgeneralArgs");
const Settingsgeneral_1 = require("../../../models/Settingsgeneral");
const helpers_1 = require("../../../helpers");
let CreateOneSettingsgeneralResolver = class CreateOneSettingsgeneralResolver {
    async createOneSettingsgeneral(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).settingsgeneral.create({
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
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateOneSettingsgeneralArgs_1.CreateOneSettingsgeneralArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CreateOneSettingsgeneralResolver.prototype, "createOneSettingsgeneral", null);
CreateOneSettingsgeneralResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Settingsgeneral_1.Settingsgeneral)
], CreateOneSettingsgeneralResolver);
exports.CreateOneSettingsgeneralResolver = CreateOneSettingsgeneralResolver;
