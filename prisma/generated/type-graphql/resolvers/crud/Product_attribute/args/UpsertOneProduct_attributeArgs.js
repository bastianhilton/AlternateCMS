"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertOneProduct_attributeArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Product_attributeCreateInput_1 = require("../../../inputs/Product_attributeCreateInput");
const Product_attributeUpdateInput_1 = require("../../../inputs/Product_attributeUpdateInput");
const Product_attributeWhereUniqueInput_1 = require("../../../inputs/Product_attributeWhereUniqueInput");
let UpsertOneProduct_attributeArgs = class UpsertOneProduct_attributeArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Product_attributeWhereUniqueInput_1.Product_attributeWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Product_attributeWhereUniqueInput_1.Product_attributeWhereUniqueInput)
], UpsertOneProduct_attributeArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Product_attributeCreateInput_1.Product_attributeCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Product_attributeCreateInput_1.Product_attributeCreateInput)
], UpsertOneProduct_attributeArgs.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Product_attributeUpdateInput_1.Product_attributeUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Product_attributeUpdateInput_1.Product_attributeUpdateInput)
], UpsertOneProduct_attributeArgs.prototype, "update", void 0);
UpsertOneProduct_attributeArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpsertOneProduct_attributeArgs);
exports.UpsertOneProduct_attributeArgs = UpsertOneProduct_attributeArgs;
