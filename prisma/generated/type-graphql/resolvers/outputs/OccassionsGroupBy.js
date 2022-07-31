"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OccassionsGroupBy = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const GraphQLScalars = tslib_1.__importStar(require("graphql-scalars"));
const OccassionsAvgAggregate_1 = require("../outputs/OccassionsAvgAggregate");
const OccassionsCountAggregate_1 = require("../outputs/OccassionsCountAggregate");
const OccassionsMaxAggregate_1 = require("../outputs/OccassionsMaxAggregate");
const OccassionsMinAggregate_1 = require("../outputs/OccassionsMinAggregate");
const OccassionsSumAggregate_1 = require("../outputs/OccassionsSumAggregate");
let OccassionsGroupBy = class OccassionsGroupBy {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", typeof BigInt === "function" ? BigInt : Object)
], OccassionsGroupBy.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], OccassionsGroupBy.prototype, "created_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], OccassionsGroupBy.prototype, "code", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], OccassionsGroupBy.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], OccassionsGroupBy.prototype, "category", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], OccassionsGroupBy.prototype, "tags", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], OccassionsGroupBy.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", typeof BigInt === "function" ? BigInt : Object)
], OccassionsGroupBy.prototype, "products", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", typeof BigInt === "function" ? BigInt : Object)
], OccassionsGroupBy.prototype, "wishlists", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], OccassionsGroupBy.prototype, "products_occassionsToproducts", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], OccassionsGroupBy.prototype, "wishlists_occassionsTowishlists", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OccassionsCountAggregate_1.OccassionsCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OccassionsCountAggregate_1.OccassionsCountAggregate)
], OccassionsGroupBy.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OccassionsAvgAggregate_1.OccassionsAvgAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OccassionsAvgAggregate_1.OccassionsAvgAggregate)
], OccassionsGroupBy.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OccassionsSumAggregate_1.OccassionsSumAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OccassionsSumAggregate_1.OccassionsSumAggregate)
], OccassionsGroupBy.prototype, "_sum", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OccassionsMinAggregate_1.OccassionsMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OccassionsMinAggregate_1.OccassionsMinAggregate)
], OccassionsGroupBy.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OccassionsMaxAggregate_1.OccassionsMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OccassionsMaxAggregate_1.OccassionsMaxAggregate)
], OccassionsGroupBy.prototype, "_max", void 0);
OccassionsGroupBy = tslib_1.__decorate([
    TypeGraphQL.ObjectType("OccassionsGroupBy", {
        isAbstract: true
    })
], OccassionsGroupBy);
exports.OccassionsGroupBy = OccassionsGroupBy;
