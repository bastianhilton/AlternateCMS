"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupBySettingsmarketingArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SettingsmarketingOrderByWithAggregationInput_1 = require("../../../inputs/SettingsmarketingOrderByWithAggregationInput");
const SettingsmarketingScalarWhereWithAggregatesInput_1 = require("../../../inputs/SettingsmarketingScalarWhereWithAggregatesInput");
const SettingsmarketingWhereInput_1 = require("../../../inputs/SettingsmarketingWhereInput");
const SettingsmarketingScalarFieldEnum_1 = require("../../../../enums/SettingsmarketingScalarFieldEnum");
let GroupBySettingsmarketingArgs = class GroupBySettingsmarketingArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SettingsmarketingWhereInput_1.SettingsmarketingWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SettingsmarketingWhereInput_1.SettingsmarketingWhereInput)
], GroupBySettingsmarketingArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [SettingsmarketingOrderByWithAggregationInput_1.SettingsmarketingOrderByWithAggregationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], GroupBySettingsmarketingArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [SettingsmarketingScalarFieldEnum_1.SettingsmarketingScalarFieldEnum], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], GroupBySettingsmarketingArgs.prototype, "by", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SettingsmarketingScalarWhereWithAggregatesInput_1.SettingsmarketingScalarWhereWithAggregatesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SettingsmarketingScalarWhereWithAggregatesInput_1.SettingsmarketingScalarWhereWithAggregatesInput)
], GroupBySettingsmarketingArgs.prototype, "having", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupBySettingsmarketingArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupBySettingsmarketingArgs.prototype, "skip", void 0);
GroupBySettingsmarketingArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], GroupBySettingsmarketingArgs);
exports.GroupBySettingsmarketingArgs = GroupBySettingsmarketingArgs;
