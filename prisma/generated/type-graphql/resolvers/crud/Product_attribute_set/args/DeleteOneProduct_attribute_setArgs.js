"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteOneProduct_attribute_setArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Product_attribute_setWhereUniqueInput_1 = require("../../../inputs/Product_attribute_setWhereUniqueInput");
let DeleteOneProduct_attribute_setArgs = class DeleteOneProduct_attribute_setArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Product_attribute_setWhereUniqueInput_1.Product_attribute_setWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Product_attribute_setWhereUniqueInput_1.Product_attribute_setWhereUniqueInput)
], DeleteOneProduct_attribute_setArgs.prototype, "where", void 0);
DeleteOneProduct_attribute_setArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteOneProduct_attribute_setArgs);
exports.DeleteOneProduct_attribute_setArgs = DeleteOneProduct_attribute_setArgs;
