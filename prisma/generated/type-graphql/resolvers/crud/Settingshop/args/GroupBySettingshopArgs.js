"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupBySettingshopArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SettingshopOrderByWithAggregationInput_1 = require("../../../inputs/SettingshopOrderByWithAggregationInput");
const SettingshopScalarWhereWithAggregatesInput_1 = require("../../../inputs/SettingshopScalarWhereWithAggregatesInput");
const SettingshopWhereInput_1 = require("../../../inputs/SettingshopWhereInput");
const SettingshopScalarFieldEnum_1 = require("../../../../enums/SettingshopScalarFieldEnum");
let GroupBySettingshopArgs = class GroupBySettingshopArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SettingshopWhereInput_1.SettingshopWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SettingshopWhereInput_1.SettingshopWhereInput)
], GroupBySettingshopArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [SettingshopOrderByWithAggregationInput_1.SettingshopOrderByWithAggregationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], GroupBySettingshopArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [SettingshopScalarFieldEnum_1.SettingshopScalarFieldEnum], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], GroupBySettingshopArgs.prototype, "by", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SettingshopScalarWhereWithAggregatesInput_1.SettingshopScalarWhereWithAggregatesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SettingshopScalarWhereWithAggregatesInput_1.SettingshopScalarWhereWithAggregatesInput)
], GroupBySettingshopArgs.prototype, "having", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupBySettingshopArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupBySettingshopArgs.prototype, "skip", void 0);
GroupBySettingshopArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], GroupBySettingshopArgs);
exports.GroupBySettingshopArgs = GroupBySettingshopArgs;
