"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OccassionsSumAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const GraphQLScalars = tslib_1.__importStar(require("graphql-scalars"));
let OccassionsSumAggregate = class OccassionsSumAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", typeof BigInt === "function" ? BigInt : Object)
], OccassionsSumAggregate.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", typeof BigInt === "function" ? BigInt : Object)
], OccassionsSumAggregate.prototype, "products", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", typeof BigInt === "function" ? BigInt : Object)
], OccassionsSumAggregate.prototype, "wishlists", void 0);
OccassionsSumAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("OccassionsSumAggregate", {
        isAbstract: true
    })
], OccassionsSumAggregate);
exports.OccassionsSumAggregate = OccassionsSumAggregate;
