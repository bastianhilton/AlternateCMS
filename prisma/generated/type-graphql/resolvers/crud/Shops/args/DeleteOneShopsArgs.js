"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteOneShopsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ShopsWhereUniqueInput_1 = require("../../../inputs/ShopsWhereUniqueInput");
let DeleteOneShopsArgs = class DeleteOneShopsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ShopsWhereUniqueInput_1.ShopsWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ShopsWhereUniqueInput_1.ShopsWhereUniqueInput)
], DeleteOneShopsArgs.prototype, "where", void 0);
DeleteOneShopsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteOneShopsArgs);
exports.DeleteOneShopsArgs = DeleteOneShopsArgs;
