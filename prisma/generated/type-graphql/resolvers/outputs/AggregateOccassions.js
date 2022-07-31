"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateOccassions = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const OccassionsAvgAggregate_1 = require("../outputs/OccassionsAvgAggregate");
const OccassionsCountAggregate_1 = require("../outputs/OccassionsCountAggregate");
const OccassionsMaxAggregate_1 = require("../outputs/OccassionsMaxAggregate");
const OccassionsMinAggregate_1 = require("../outputs/OccassionsMinAggregate");
const OccassionsSumAggregate_1 = require("../outputs/OccassionsSumAggregate");
let AggregateOccassions = class AggregateOccassions {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OccassionsCountAggregate_1.OccassionsCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OccassionsCountAggregate_1.OccassionsCountAggregate)
], AggregateOccassions.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OccassionsAvgAggregate_1.OccassionsAvgAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OccassionsAvgAggregate_1.OccassionsAvgAggregate)
], AggregateOccassions.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OccassionsSumAggregate_1.OccassionsSumAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OccassionsSumAggregate_1.OccassionsSumAggregate)
], AggregateOccassions.prototype, "_sum", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OccassionsMinAggregate_1.OccassionsMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OccassionsMinAggregate_1.OccassionsMinAggregate)
], AggregateOccassions.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OccassionsMaxAggregate_1.OccassionsMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OccassionsMaxAggregate_1.OccassionsMaxAggregate)
], AggregateOccassions.prototype, "_max", void 0);
AggregateOccassions = tslib_1.__decorate([
    TypeGraphQL.ObjectType("AggregateOccassions", {
        isAbstract: true
    })
], AggregateOccassions);
exports.AggregateOccassions = AggregateOccassions;
