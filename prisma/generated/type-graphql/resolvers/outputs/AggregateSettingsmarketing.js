"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateSettingsmarketing = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SettingsmarketingAvgAggregate_1 = require("../outputs/SettingsmarketingAvgAggregate");
const SettingsmarketingCountAggregate_1 = require("../outputs/SettingsmarketingCountAggregate");
const SettingsmarketingMaxAggregate_1 = require("../outputs/SettingsmarketingMaxAggregate");
const SettingsmarketingMinAggregate_1 = require("../outputs/SettingsmarketingMinAggregate");
const SettingsmarketingSumAggregate_1 = require("../outputs/SettingsmarketingSumAggregate");
let AggregateSettingsmarketing = class AggregateSettingsmarketing {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SettingsmarketingCountAggregate_1.SettingsmarketingCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SettingsmarketingCountAggregate_1.SettingsmarketingCountAggregate)
], AggregateSettingsmarketing.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SettingsmarketingAvgAggregate_1.SettingsmarketingAvgAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SettingsmarketingAvgAggregate_1.SettingsmarketingAvgAggregate)
], AggregateSettingsmarketing.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SettingsmarketingSumAggregate_1.SettingsmarketingSumAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SettingsmarketingSumAggregate_1.SettingsmarketingSumAggregate)
], AggregateSettingsmarketing.prototype, "_sum", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SettingsmarketingMinAggregate_1.SettingsmarketingMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SettingsmarketingMinAggregate_1.SettingsmarketingMinAggregate)
], AggregateSettingsmarketing.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SettingsmarketingMaxAggregate_1.SettingsmarketingMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SettingsmarketingMaxAggregate_1.SettingsmarketingMaxAggregate)
], AggregateSettingsmarketing.prototype, "_max", void 0);
AggregateSettingsmarketing = tslib_1.__decorate([
    TypeGraphQL.ObjectType("AggregateSettingsmarketing", {
        isAbstract: true
    })
], AggregateSettingsmarketing);
exports.AggregateSettingsmarketing = AggregateSettingsmarketing;
