"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateSettingsgeneral = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SettingsgeneralAvgAggregate_1 = require("../outputs/SettingsgeneralAvgAggregate");
const SettingsgeneralCountAggregate_1 = require("../outputs/SettingsgeneralCountAggregate");
const SettingsgeneralMaxAggregate_1 = require("../outputs/SettingsgeneralMaxAggregate");
const SettingsgeneralMinAggregate_1 = require("../outputs/SettingsgeneralMinAggregate");
const SettingsgeneralSumAggregate_1 = require("../outputs/SettingsgeneralSumAggregate");
let AggregateSettingsgeneral = class AggregateSettingsgeneral {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SettingsgeneralCountAggregate_1.SettingsgeneralCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SettingsgeneralCountAggregate_1.SettingsgeneralCountAggregate)
], AggregateSettingsgeneral.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SettingsgeneralAvgAggregate_1.SettingsgeneralAvgAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SettingsgeneralAvgAggregate_1.SettingsgeneralAvgAggregate)
], AggregateSettingsgeneral.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SettingsgeneralSumAggregate_1.SettingsgeneralSumAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SettingsgeneralSumAggregate_1.SettingsgeneralSumAggregate)
], AggregateSettingsgeneral.prototype, "_sum", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SettingsgeneralMinAggregate_1.SettingsgeneralMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SettingsgeneralMinAggregate_1.SettingsgeneralMinAggregate)
], AggregateSettingsgeneral.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SettingsgeneralMaxAggregate_1.SettingsgeneralMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SettingsgeneralMaxAggregate_1.SettingsgeneralMaxAggregate)
], AggregateSettingsgeneral.prototype, "_max", void 0);
AggregateSettingsgeneral = tslib_1.__decorate([
    TypeGraphQL.ObjectType("AggregateSettingsgeneral", {
        isAbstract: true
    })
], AggregateSettingsgeneral);
exports.AggregateSettingsgeneral = AggregateSettingsgeneral;
