"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteOneProduct_attribute_setResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const DeleteOneProduct_attribute_setArgs_1 = require("./args/DeleteOneProduct_attribute_setArgs");
const Product_attribute_set_1 = require("../../../models/Product_attribute_set");
const helpers_1 = require("../../../helpers");
let DeleteOneProduct_attribute_setResolver = class DeleteOneProduct_attribute_setResolver {
    async deleteOneProduct_attribute_set(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).product_attribute_set.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Product_attribute_set_1.Product_attribute_set, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteOneProduct_attribute_setArgs_1.DeleteOneProduct_attribute_setArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], DeleteOneProduct_attribute_setResolver.prototype, "deleteOneProduct_attribute_set", null);
DeleteOneProduct_attribute_setResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Product_attribute_set_1.Product_attribute_set)
], DeleteOneProduct_attribute_setResolver);
exports.DeleteOneProduct_attribute_setResolver = DeleteOneProduct_attribute_setResolver;
