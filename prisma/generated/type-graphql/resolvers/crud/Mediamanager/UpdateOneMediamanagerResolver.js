"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateOneMediamanagerResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const UpdateOneMediamanagerArgs_1 = require("./args/UpdateOneMediamanagerArgs");
const Mediamanager_1 = require("../../../models/Mediamanager");
const helpers_1 = require("../../../helpers");
let UpdateOneMediamanagerResolver = class UpdateOneMediamanagerResolver {
    async updateOneMediamanager(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).mediamanager.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Mediamanager_1.Mediamanager, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateOneMediamanagerArgs_1.UpdateOneMediamanagerArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UpdateOneMediamanagerResolver.prototype, "updateOneMediamanager", null);
UpdateOneMediamanagerResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Mediamanager_1.Mediamanager)
], UpdateOneMediamanagerResolver);
exports.UpdateOneMediamanagerResolver = UpdateOneMediamanagerResolver;