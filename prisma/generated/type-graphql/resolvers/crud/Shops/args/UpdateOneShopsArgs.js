"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateOneShopsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ShopsUpdateInput_1 = require("../../../inputs/ShopsUpdateInput");
const ShopsWhereUniqueInput_1 = require("../../../inputs/ShopsWhereUniqueInput");
let UpdateOneShopsArgs = class UpdateOneShopsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ShopsUpdateInput_1.ShopsUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ShopsUpdateInput_1.ShopsUpdateInput)
], UpdateOneShopsArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ShopsWhereUniqueInput_1.ShopsWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ShopsWhereUniqueInput_1.ShopsWhereUniqueInput)
], UpdateOneShopsArgs.prototype, "where", void 0);
UpdateOneShopsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateOneShopsArgs);
exports.UpdateOneShopsArgs = UpdateOneShopsArgs;
