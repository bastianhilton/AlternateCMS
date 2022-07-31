"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertOneProduct_attribute_setArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Product_attribute_setCreateInput_1 = require("../../../inputs/Product_attribute_setCreateInput");
const Product_attribute_setUpdateInput_1 = require("../../../inputs/Product_attribute_setUpdateInput");
const Product_attribute_setWhereUniqueInput_1 = require("../../../inputs/Product_attribute_setWhereUniqueInput");
let UpsertOneProduct_attribute_setArgs = class UpsertOneProduct_attribute_setArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Product_attribute_setWhereUniqueInput_1.Product_attribute_setWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Product_attribute_setWhereUniqueInput_1.Product_attribute_setWhereUniqueInput)
], UpsertOneProduct_attribute_setArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Product_attribute_setCreateInput_1.Product_attribute_setCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Product_attribute_setCreateInput_1.Product_attribute_setCreateInput)
], UpsertOneProduct_attribute_setArgs.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Product_attribute_setUpdateInput_1.Product_attribute_setUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Product_attribute_setUpdateInput_1.Product_attribute_setUpdateInput)
], UpsertOneProduct_attribute_setArgs.prototype, "update", void 0);
UpsertOneProduct_attribute_setArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpsertOneProduct_attribute_setArgs);
exports.UpsertOneProduct_attribute_setArgs = UpsertOneProduct_attribute_setArgs;
