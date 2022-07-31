"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OccassionsWhereUniqueInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const GraphQLScalars = tslib_1.__importStar(require("graphql-scalars"));
let OccassionsWhereUniqueInput = class OccassionsWhereUniqueInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", typeof BigInt === "function" ? BigInt : Object)
], OccassionsWhereUniqueInput.prototype, "id", void 0);
OccassionsWhereUniqueInput = tslib_1.__decorate([
    TypeGraphQL.InputType("OccassionsWhereUniqueInput", {
        isAbstract: true
    })
], OccassionsWhereUniqueInput);
exports.OccassionsWhereUniqueInput = OccassionsWhereUniqueInput;
