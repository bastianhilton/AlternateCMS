"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateOneProduct_attributeResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const CreateOneProduct_attributeArgs_1 = require("./args/CreateOneProduct_attributeArgs");
const Product_attribute_1 = require("../../../models/Product_attribute");
const helpers_1 = require("../../../helpers");
let CreateOneProduct_attributeResolver = class CreateOneProduct_attributeResolver {
    async createOneProduct_attribute(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).product_attribute.create({
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
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateOneProduct_attributeArgs_1.CreateOneProduct_attributeArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CreateOneProduct_attributeResolver.prototype, "createOneProduct_attribute", null);
CreateOneProduct_attributeResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Product_attribute_1.Product_attribute)
], CreateOneProduct_attributeResolver);
exports.CreateOneProduct_attributeResolver = CreateOneProduct_attributeResolver;
