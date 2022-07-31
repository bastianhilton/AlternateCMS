"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstOccassionsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const FindFirstOccassionsArgs_1 = require("./args/FindFirstOccassionsArgs");
const Occassions_1 = require("../../../models/Occassions");
const helpers_1 = require("../../../helpers");
let FindFirstOccassionsResolver = class FindFirstOccassionsResolver {
    async findFirstOccassions(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).occassions.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Occassions_1.Occassions, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstOccassionsArgs_1.FindFirstOccassionsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindFirstOccassionsResolver.prototype, "findFirstOccassions", null);
FindFirstOccassionsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Occassions_1.Occassions)
], FindFirstOccassionsResolver);
exports.FindFirstOccassionsResolver = FindFirstOccassionsResolver;
