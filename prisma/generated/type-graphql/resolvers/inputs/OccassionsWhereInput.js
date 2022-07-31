"use strict";
var OccassionsWhereInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.OccassionsWhereInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BigIntFilter_1 = require("../inputs/BigIntFilter");
const BigIntNullableFilter_1 = require("../inputs/BigIntNullableFilter");
const DateTimeNullableFilter_1 = require("../inputs/DateTimeNullableFilter");
const StringNullableFilter_1 = require("../inputs/StringNullableFilter");
let OccassionsWhereInput = OccassionsWhereInput_1 = class OccassionsWhereInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OccassionsWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], OccassionsWhereInput.prototype, "AND", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OccassionsWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], OccassionsWhereInput.prototype, "OR", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OccassionsWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], OccassionsWhereInput.prototype, "NOT", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BigIntFilter_1.BigIntFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BigIntFilter_1.BigIntFilter)
], OccassionsWhereInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeNullableFilter_1.DateTimeNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeNullableFilter_1.DateTimeNullableFilter)
], OccassionsWhereInput.prototype, "created_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], OccassionsWhereInput.prototype, "code", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], OccassionsWhereInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], OccassionsWhereInput.prototype, "category", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], OccassionsWhereInput.prototype, "tags", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], OccassionsWhereInput.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BigIntNullableFilter_1.BigIntNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BigIntNullableFilter_1.BigIntNullableFilter)
], OccassionsWhereInput.prototype, "products", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BigIntNullableFilter_1.BigIntNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BigIntNullableFilter_1.BigIntNullableFilter)
], OccassionsWhereInput.prototype, "wishlists", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], OccassionsWhereInput.prototype, "products_occassionsToproducts", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], OccassionsWhereInput.prototype, "wishlists_occassionsTowishlists", void 0);
OccassionsWhereInput = OccassionsWhereInput_1 = tslib_1.__decorate([
    TypeGraphQL.InputType("OccassionsWhereInput", {
        isAbstract: true
    })
], OccassionsWhereInput);
exports.OccassionsWhereInput = OccassionsWhereInput;
