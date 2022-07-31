"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateOneProduct_attribute_setArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Product_attribute_setUpdateInput_1 = require("../../../inputs/Product_attribute_setUpdateInput");
const Product_attribute_setWhereUniqueInput_1 = require("../../../inputs/Product_attribute_setWhereUniqueInput");
let UpdateOneProduct_attribute_setArgs = class UpdateOneProduct_attribute_setArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Product_attribute_setUpdateInput_1.Product_attribute_setUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Product_attribute_setUpdateInput_1.Product_attribute_setUpdateInput)
], UpdateOneProduct_attribute_setArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Product_attribute_setWhereUniqueInput_1.Product_attribute_setWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Product_attribute_setWhereUniqueInput_1.Product_attribute_setWhereUniqueInput)
], UpdateOneProduct_attribute_setArgs.prototype, "where", void 0);
UpdateOneProduct_attribute_setArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateOneProduct_attribute_setArgs);
exports.UpdateOneProduct_attribute_setArgs = UpdateOneProduct_attribute_setArgs;
