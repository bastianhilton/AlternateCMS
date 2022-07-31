"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateOneProduct_attribute_setArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Product_attribute_setCreateInput_1 = require("../../../inputs/Product_attribute_setCreateInput");
let CreateOneProduct_attribute_setArgs = class CreateOneProduct_attribute_setArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Product_attribute_setCreateInput_1.Product_attribute_setCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Product_attribute_setCreateInput_1.Product_attribute_setCreateInput)
], CreateOneProduct_attribute_setArgs.prototype, "data", void 0);
CreateOneProduct_attribute_setArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateOneProduct_attribute_setArgs);
exports.CreateOneProduct_attribute_setArgs = CreateOneProduct_attribute_setArgs;
