"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertOneProduct_attributeResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const UpsertOneProduct_attributeArgs_1 = require("./args/UpsertOneProduct_attributeArgs");
const Product_attribute_1 = require("../../../models/Product_attribute");
const helpers_1 = require("../../../helpers");
let UpsertOneProduct_attributeResolver = class UpsertOneProduct_attributeResolver {
    async upsertOneProduct_attribute(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).product_attribute.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Product_attribute_1.Product_attribute, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpsertOneProduct_attributeArgs_1.UpsertOneProduct_attributeArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UpsertOneProduct_attributeResolver.prototype, "upsertOneProduct_attribute", null);
UpsertOneProduct_attributeResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Product_attribute_1.Product_attribute)
], UpsertOneProduct_attributeResolver);
exports.UpsertOneProduct_attributeResolver = UpsertOneProduct_attributeResolver;
