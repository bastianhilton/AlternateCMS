"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateSettingssales = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SettingssalesAvgAggregate_1 = require("../outputs/SettingssalesAvgAggregate");
const SettingssalesCountAggregate_1 = require("../outputs/SettingssalesCountAggregate");
const SettingssalesMaxAggregate_1 = require("../outputs/SettingssalesMaxAggregate");
const SettingssalesMinAggregate_1 = require("../outputs/SettingssalesMinAggregate");
const SettingssalesSumAggregate_1 = require("../outputs/SettingssalesSumAggregate");
let AggregateSettingssales = class AggregateSettingssales {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SettingssalesCountAggregate_1.SettingssalesCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SettingssalesCountAggregate_1.SettingssalesCountAggregate)
], AggregateSettingssales.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SettingssalesAvgAggregate_1.SettingssalesAvgAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SettingssalesAvgAggregate_1.SettingssalesAvgAggregate)
], AggregateSettingssales.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SettingssalesSumAggregate_1.SettingssalesSumAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SettingssalesSumAggregate_1.SettingssalesSumAggregate)
], AggregateSettingssales.prototype, "_sum", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SettingssalesMinAggregate_1.SettingssalesMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SettingssalesMinAggregate_1.SettingssalesMinAggregate)
], AggregateSettingssales.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SettingssalesMaxAggregate_1.SettingssalesMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SettingssalesMaxAggregate_1.SettingssalesMaxAggregate)
], AggregateSettingssales.prototype, "_max", void 0);
AggregateSettingssales = tslib_1.__decorate([
    TypeGraphQL.ObjectType("AggregateSettingssales", {
        isAbstract: true
    })
], AggregateSettingssales);
exports.AggregateSettingssales = AggregateSettingssales;
