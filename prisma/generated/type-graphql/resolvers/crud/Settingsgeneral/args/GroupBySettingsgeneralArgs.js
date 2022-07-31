"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupBySettingsgeneralArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SettingsgeneralOrderByWithAggregationInput_1 = require("../../../inputs/SettingsgeneralOrderByWithAggregationInput");
const SettingsgeneralScalarWhereWithAggregatesInput_1 = require("../../../inputs/SettingsgeneralScalarWhereWithAggregatesInput");
const SettingsgeneralWhereInput_1 = require("../../../inputs/SettingsgeneralWhereInput");
const SettingsgeneralScalarFieldEnum_1 = require("../../../../enums/SettingsgeneralScalarFieldEnum");
let GroupBySettingsgeneralArgs = class GroupBySettingsgeneralArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SettingsgeneralWhereInput_1.SettingsgeneralWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SettingsgeneralWhereInput_1.SettingsgeneralWhereInput)
], GroupBySettingsgeneralArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [SettingsgeneralOrderByWithAggregationInput_1.SettingsgeneralOrderByWithAggregationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], GroupBySettingsgeneralArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [SettingsgeneralScalarFieldEnum_1.SettingsgeneralScalarFieldEnum], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], GroupBySettingsgeneralArgs.prototype, "by", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SettingsgeneralScalarWhereWithAggregatesInput_1.SettingsgeneralScalarWhereWithAggregatesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SettingsgeneralScalarWhereWithAggregatesInput_1.SettingsgeneralScalarWhereWithAggregatesInput)
], GroupBySettingsgeneralArgs.prototype, "having", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupBySettingsgeneralArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupBySettingsgeneralArgs.prototype, "skip", void 0);
GroupBySettingsgeneralArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], GroupBySettingsgeneralArgs);
exports.GroupBySettingsgeneralArgs = GroupBySettingsgeneralArgs;
