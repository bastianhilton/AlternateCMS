"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateOneProduct_attributeArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Product_attributeCreateInput_1 = require("../../../inputs/Product_attributeCreateInput");
let CreateOneProduct_attributeArgs = class CreateOneProduct_attributeArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Product_attributeCreateInput_1.Product_attributeCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Product_attributeCreateInput_1.Product_attributeCreateInput)
], CreateOneProduct_attributeArgs.prototype, "data", void 0);
CreateOneProduct_attributeArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateOneProduct_attributeArgs);
exports.CreateOneProduct_attributeArgs = CreateOneProduct_attributeArgs;
