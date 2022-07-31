"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindManyOccassionsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const OccassionsOrderByWithRelationAndSearchRelevanceInput_1 = require("../../../inputs/OccassionsOrderByWithRelationAndSearchRelevanceInput");
const OccassionsWhereInput_1 = require("../../../inputs/OccassionsWhereInput");
const OccassionsWhereUniqueInput_1 = require("../../../inputs/OccassionsWhereUniqueInput");
const OccassionsScalarFieldEnum_1 = require("../../../../enums/OccassionsScalarFieldEnum");
let FindManyOccassionsArgs = class FindManyOccassionsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OccassionsWhereInput_1.OccassionsWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OccassionsWhereInput_1.OccassionsWhereInput)
], FindManyOccassionsArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OccassionsOrderByWithRelationAndSearchRelevanceInput_1.OccassionsOrderByWithRelationAndSearchRelevanceInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindManyOccassionsArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OccassionsWhereUniqueInput_1.OccassionsWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OccassionsWhereUniqueInput_1.OccassionsWhereUniqueInput)
], FindManyOccassionsArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindManyOccassionsArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindManyOccassionsArgs.prototype, "skip", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OccassionsScalarFieldEnum_1.OccassionsScalarFieldEnum], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindManyOccassionsArgs.prototype, "distinct", void 0);
FindManyOccassionsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindManyOccassionsArgs);
exports.FindManyOccassionsArgs = FindManyOccassionsArgs;
