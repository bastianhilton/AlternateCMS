"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateSettingshop = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SettingshopAvgAggregate_1 = require("../outputs/SettingshopAvgAggregate");
const SettingshopCountAggregate_1 = require("../outputs/SettingshopCountAggregate");
const SettingshopMaxAggregate_1 = require("../outputs/SettingshopMaxAggregate");
const SettingshopMinAggregate_1 = require("../outputs/SettingshopMinAggregate");
const SettingshopSumAggregate_1 = require("../outputs/SettingshopSumAggregate");
let AggregateSettingshop = class AggregateSettingshop {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SettingshopCountAggregate_1.SettingshopCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SettingshopCountAggregate_1.SettingshopCountAggregate)
], AggregateSettingshop.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SettingshopAvgAggregate_1.SettingshopAvgAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SettingshopAvgAggregate_1.SettingshopAvgAggregate)
], AggregateSettingshop.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SettingshopSumAggregate_1.SettingshopSumAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SettingshopSumAggregate_1.SettingshopSumAggregate)
], AggregateSettingshop.prototype, "_sum", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SettingshopMinAggregate_1.SettingshopMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SettingshopMinAggregate_1.SettingshopMinAggregate)
], AggregateSettingshop.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SettingshopMaxAggregate_1.SettingshopMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SettingshopMaxAggregate_1.SettingshopMaxAggregate)
], AggregateSettingshop.prototype, "_max", void 0);
AggregateSettingshop = tslib_1.__decorate([
    TypeGraphQL.ObjectType("AggregateSettingshop", {
        isAbstract: true
    })
], AggregateSettingshop);
exports.AggregateSettingshop = AggregateSettingshop;
