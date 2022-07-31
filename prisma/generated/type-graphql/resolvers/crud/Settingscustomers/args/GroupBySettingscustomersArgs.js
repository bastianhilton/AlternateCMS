"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupBySettingscustomersArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SettingscustomersOrderByWithAggregationInput_1 = require("../../../inputs/SettingscustomersOrderByWithAggregationInput");
const SettingscustomersScalarWhereWithAggregatesInput_1 = require("../../../inputs/SettingscustomersScalarWhereWithAggregatesInput");
const SettingscustomersWhereInput_1 = require("../../../inputs/SettingscustomersWhereInput");
const SettingscustomersScalarFieldEnum_1 = require("../../../../enums/SettingscustomersScalarFieldEnum");
let GroupBySettingscustomersArgs = class GroupBySettingscustomersArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SettingscustomersWhereInput_1.SettingscustomersWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SettingscustomersWhereInput_1.SettingscustomersWhereInput)
], GroupBySettingscustomersArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [SettingscustomersOrderByWithAggregationInput_1.SettingscustomersOrderByWithAggregationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], GroupBySettingscustomersArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [SettingscustomersScalarFieldEnum_1.SettingscustomersScalarFieldEnum], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], GroupBySettingscustomersArgs.prototype, "by", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SettingscustomersScalarWhereWithAggregatesInput_1.SettingscustomersScalarWhereWithAggregatesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SettingscustomersScalarWhereWithAggregatesInput_1.SettingscustomersScalarWhereWithAggregatesInput)
], GroupBySettingscustomersArgs.prototype, "having", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupBySettingscustomersArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupBySettingscustomersArgs.prototype, "skip", void 0);
GroupBySettingscustomersArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], GroupBySettingscustomersArgs);
exports.GroupBySettingscustomersArgs = GroupBySettingscustomersArgs;
