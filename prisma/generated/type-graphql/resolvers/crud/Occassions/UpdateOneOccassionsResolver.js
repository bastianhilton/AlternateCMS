"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateOneOccassionsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const UpdateOneOccassionsArgs_1 = require("./args/UpdateOneOccassionsArgs");
const Occassions_1 = require("../../../models/Occassions");
const helpers_1 = require("../../../helpers");
let UpdateOneOccassionsResolver = class UpdateOneOccassionsResolver {
    async updateOneOccassions(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).occassions.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Occassions_1.Occassions, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateOneOccassionsArgs_1.UpdateOneOccassionsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UpdateOneOccassionsResolver.prototype, "updateOneOccassions", null);
UpdateOneOccassionsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Occassions_1.Occassions)
], UpdateOneOccassionsResolver);
exports.UpdateOneOccassionsResolver = UpdateOneOccassionsResolver;
