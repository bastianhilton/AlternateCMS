"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByOccassionsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const OccassionsOrderByWithAggregationInput_1 = require("../../../inputs/OccassionsOrderByWithAggregationInput");
const OccassionsScalarWhereWithAggregatesInput_1 = require("../../../inputs/OccassionsScalarWhereWithAggregatesInput");
const OccassionsWhereInput_1 = require("../../../inputs/OccassionsWhereInput");
const OccassionsScalarFieldEnum_1 = require("../../../../enums/OccassionsScalarFieldEnum");
let GroupByOccassionsArgs = class GroupByOccassionsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OccassionsWhereInput_1.OccassionsWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OccassionsWhereInput_1.OccassionsWhereInput)
], GroupByOccassionsArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OccassionsOrderByWithAggregationInput_1.OccassionsOrderByWithAggregationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByOccassionsArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OccassionsScalarFieldEnum_1.OccassionsScalarFieldEnum], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByOccassionsArgs.prototype, "by", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OccassionsScalarWhereWithAggregatesInput_1.OccassionsScalarWhereWithAggregatesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OccassionsScalarWhereWithAggregatesInput_1.OccassionsScalarWhereWithAggregatesInput)
], GroupByOccassionsArgs.prototype, "having", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByOccassionsArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByOccassionsArgs.prototype, "skip", void 0);
GroupByOccassionsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], GroupByOccassionsArgs);
exports.GroupByOccassionsArgs = GroupByOccassionsArgs;
