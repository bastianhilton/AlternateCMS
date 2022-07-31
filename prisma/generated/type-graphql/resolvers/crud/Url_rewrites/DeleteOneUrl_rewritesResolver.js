"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteOneUrl_rewritesResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const DeleteOneUrl_rewritesArgs_1 = require("./args/DeleteOneUrl_rewritesArgs");
const Url_rewrites_1 = require("../../../models/Url_rewrites");
const helpers_1 = require("../../../helpers");
let DeleteOneUrl_rewritesResolver = class DeleteOneUrl_rewritesResolver {
    async deleteOneUrl_rewrites(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).url_rewrites.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Url_rewrites_1.Url_rewrites, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteOneUrl_rewritesArgs_1.DeleteOneUrl_rewritesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], DeleteOneUrl_rewritesResolver.prototype, "deleteOneUrl_rewrites", null);
DeleteOneUrl_rewritesResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Url_rewrites_1.Url_rewrites)
], DeleteOneUrl_rewritesResolver);
exports.DeleteOneUrl_rewritesResolver = DeleteOneUrl_rewritesResolver;
