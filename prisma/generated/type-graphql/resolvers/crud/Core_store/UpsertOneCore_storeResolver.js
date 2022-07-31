"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertOneCore_storeResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const UpsertOneCore_storeArgs_1 = require("./args/UpsertOneCore_storeArgs");
const Core_store_1 = require("../../../models/Core_store");
const helpers_1 = require("../../../helpers");
let UpsertOneCore_storeResolver = class UpsertOneCore_storeResolver {
    async upsertOneCore_store(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).core_store.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Core_store_1.Core_store, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpsertOneCore_storeArgs_1.UpsertOneCore_storeArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UpsertOneCore_storeResolver.prototype, "upsertOneCore_store", null);
UpsertOneCore_storeResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Core_store_1.Core_store)
], UpsertOneCore_storeResolver);
exports.UpsertOneCore_storeResolver = UpsertOneCore_storeResolver;
