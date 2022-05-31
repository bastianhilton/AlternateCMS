"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateOotoArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const OotoUpdateInput_1 = require("../../../inputs/OotoUpdateInput");
const OotoWhereUniqueInput_1 = require("../../../inputs/OotoWhereUniqueInput");
let UpdateOotoArgs = class UpdateOotoArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OotoUpdateInput_1.OotoUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", OotoUpdateInput_1.OotoUpdateInput)
], UpdateOotoArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OotoWhereUniqueInput_1.OotoWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", OotoWhereUniqueInput_1.OotoWhereUniqueInput)
], UpdateOotoArgs.prototype, "where", void 0);
UpdateOotoArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateOotoArgs);
exports.UpdateOotoArgs = UpdateOotoArgs;
