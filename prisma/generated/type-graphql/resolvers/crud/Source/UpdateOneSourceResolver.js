"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateOneSourceResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const UpdateOneSourceArgs_1 = require("./args/UpdateOneSourceArgs");
const Source_1 = require("../../../models/Source");
const helpers_1 = require("../../../helpers");
let UpdateOneSourceResolver = class UpdateOneSourceResolver {
    async updateOneSource(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).source.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Source_1.Source, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateOneSourceArgs_1.UpdateOneSourceArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UpdateOneSourceResolver.prototype, "updateOneSource", null);
UpdateOneSourceResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Source_1.Source)
], UpdateOneSourceResolver);
exports.UpdateOneSourceResolver = UpdateOneSourceResolver;
