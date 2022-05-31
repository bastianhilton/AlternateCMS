"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product_attribute_setUpdateWithoutProduct_attributeInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const NullableStringFieldUpdateOperationsInput_1 = require("../inputs/NullableStringFieldUpdateOperationsInput");
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
let Product_attribute_setUpdateWithoutProduct_attributeInput = class Product_attribute_setUpdateWithoutProduct_attributeInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], Product_attribute_setUpdateWithoutProduct_attributeInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], Product_attribute_setUpdateWithoutProduct_attributeInput.prototype, "based_on", void 0);
Product_attribute_setUpdateWithoutProduct_attributeInput = tslib_1.__decorate([
    TypeGraphQL.InputType("Product_attribute_setUpdateWithoutProduct_attributeInput", {
        isAbstract: true
    })
], Product_attribute_setUpdateWithoutProduct_attributeInput);
exports.Product_attribute_setUpdateWithoutProduct_attributeInput = Product_attribute_setUpdateWithoutProduct_attributeInput;
