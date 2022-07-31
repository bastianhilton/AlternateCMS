"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupBySettingssalesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SettingssalesOrderByWithAggregationInput_1 = require("../../../inputs/SettingssalesOrderByWithAggregationInput");
const SettingssalesScalarWhereWithAggregatesInput_1 = require("../../../inputs/SettingssalesScalarWhereWithAggregatesInput");
const SettingssalesWhereInput_1 = require("../../../inputs/SettingssalesWhereInput");
const SettingssalesScalarFieldEnum_1 = require("../../../../enums/SettingssalesScalarFieldEnum");
let GroupBySettingssalesArgs = class GroupBySettingssalesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SettingssalesWhereInput_1.SettingssalesWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SettingssalesWhereInput_1.SettingssalesWhereInput)
], GroupBySettingssalesArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [SettingssalesOrderByWithAggregationInput_1.SettingssalesOrderByWithAggregationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], GroupBySettingssalesArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [SettingssalesScalarFieldEnum_1.SettingssalesScalarFieldEnum], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], GroupBySettingssalesArgs.prototype, "by", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SettingssalesScalarWhereWithAggregatesInput_1.SettingssalesScalarWhereWithAggregatesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SettingssalesScalarWhereWithAggregatesInput_1.SettingssalesScalarWhereWithAggregatesInput)
], GroupBySettingssalesArgs.prototype, "having", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupBySettingssalesArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupBySettingssalesArgs.prototype, "skip", void 0);
GroupBySettingssalesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], GroupBySettingssalesArgs);
exports.GroupBySettingssalesArgs = GroupBySettingssalesArgs;
