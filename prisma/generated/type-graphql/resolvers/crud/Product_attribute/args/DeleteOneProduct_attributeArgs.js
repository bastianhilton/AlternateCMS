"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteOneProduct_attributeArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Product_attributeWhereUniqueInput_1 = require("../../../inputs/Product_attributeWhereUniqueInput");
let DeleteOneProduct_attributeArgs = class DeleteOneProduct_attributeArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Product_attributeWhereUniqueInput_1.Product_attributeWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Product_attributeWhereUniqueInput_1.Product_attributeWhereUniqueInput)
], DeleteOneProduct_attributeArgs.prototype, "where", void 0);
DeleteOneProduct_attributeArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteOneProduct_attributeArgs);
exports.DeleteOneProduct_attributeArgs = DeleteOneProduct_attributeArgs;
