"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateSettingscustomers = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SettingscustomersAvgAggregate_1 = require("../outputs/SettingscustomersAvgAggregate");
const SettingscustomersCountAggregate_1 = require("../outputs/SettingscustomersCountAggregate");
const SettingscustomersMaxAggregate_1 = require("../outputs/SettingscustomersMaxAggregate");
const SettingscustomersMinAggregate_1 = require("../outputs/SettingscustomersMinAggregate");
const SettingscustomersSumAggregate_1 = require("../outputs/SettingscustomersSumAggregate");
let AggregateSettingscustomers = class AggregateSettingscustomers {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SettingscustomersCountAggregate_1.SettingscustomersCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SettingscustomersCountAggregate_1.SettingscustomersCountAggregate)
], AggregateSettingscustomers.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SettingscustomersAvgAggregate_1.SettingscustomersAvgAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SettingscustomersAvgAggregate_1.SettingscustomersAvgAggregate)
], AggregateSettingscustomers.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SettingscustomersSumAggregate_1.SettingscustomersSumAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SettingscustomersSumAggregate_1.SettingscustomersSumAggregate)
], AggregateSettingscustomers.prototype, "_sum", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SettingscustomersMinAggregate_1.SettingscustomersMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SettingscustomersMinAggregate_1.SettingscustomersMinAggregate)
], AggregateSettingscustomers.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SettingscustomersMaxAggregate_1.SettingscustomersMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SettingscustomersMaxAggregate_1.SettingscustomersMaxAggregate)
], AggregateSettingscustomers.prototype, "_max", void 0);
AggregateSettingscustomers = tslib_1.__decorate([
    TypeGraphQL.ObjectType("AggregateSettingscustomers", {
        isAbstract: true
    })
], AggregateSettingscustomers);
exports.AggregateSettingscustomers = AggregateSettingscustomers;
