"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateOccassionsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const OccassionsOrderByWithRelationAndSearchRelevanceInput_1 = require("../../../inputs/OccassionsOrderByWithRelationAndSearchRelevanceInput");
const OccassionsWhereInput_1 = require("../../../inputs/OccassionsWhereInput");
const OccassionsWhereUniqueInput_1 = require("../../../inputs/OccassionsWhereUniqueInput");
let AggregateOccassionsArgs = class AggregateOccassionsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OccassionsWhereInput_1.OccassionsWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OccassionsWhereInput_1.OccassionsWhereInput)
], AggregateOccassionsArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OccassionsOrderByWithRelationAndSearchRelevanceInput_1.OccassionsOrderByWithRelationAndSearchRelevanceInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], AggregateOccassionsArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OccassionsWhereUniqueInput_1.OccassionsWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OccassionsWhereUniqueInput_1.OccassionsWhereUniqueInput)
], AggregateOccassionsArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], AggregateOccassionsArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], AggregateOccassionsArgs.prototype, "skip", void 0);
AggregateOccassionsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], AggregateOccassionsArgs);
exports.AggregateOccassionsArgs = AggregateOccassionsArgs;
