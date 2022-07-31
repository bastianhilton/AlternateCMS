"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SettingssalesOrderByWithAggregationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SettingssalesAvgOrderByAggregateInput_1 = require("../inputs/SettingssalesAvgOrderByAggregateInput");
const SettingssalesCountOrderByAggregateInput_1 = require("../inputs/SettingssalesCountOrderByAggregateInput");
const SettingssalesMaxOrderByAggregateInput_1 = require("../inputs/SettingssalesMaxOrderByAggregateInput");
const SettingssalesMinOrderByAggregateInput_1 = require("../inputs/SettingssalesMinOrderByAggregateInput");
const SettingssalesSumOrderByAggregateInput_1 = require("../inputs/SettingssalesSumOrderByAggregateInput");
const SortOrder_1 = require("../../enums/SortOrder");
let SettingssalesOrderByWithAggregationInput = class SettingssalesOrderByWithAggregationInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SettingssalesOrderByWithAggregationInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SettingssalesOrderByWithAggregationInput.prototype, "created_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SettingssalesOrderByWithAggregationInput.prototype, "analytics_account_type", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SettingssalesOrderByWithAggregationInput.prototype, "analytics_account_number", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SettingssalesOrderByWithAggregationInput.prototype, "analytics_anonymizeip", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SettingssalesOrderByWithAggregationInput.prototype, "analytics_content_experiments", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SettingssalesOrderByWithAggregationInput.prototype, "adwords_conversionid", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SettingssalesOrderByWithAggregationInput.prototype, "adwords_conversionlanguage", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SettingssalesOrderByWithAggregationInput.prototype, "adwords_conversionformat", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SettingssalesOrderByWithAggregationInput.prototype, "adwords_conversioncolor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SettingssalesOrderByWithAggregationInput.prototype, "adwords_conversionlabel", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SettingssalesOrderByWithAggregationInput.prototype, "adwords_conversionvalue_type", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SettingssalesOrderByWithAggregationInput.prototype, "adwords_sendorder", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SettingssalesOrderByWithAggregationInput.prototype, "tag_manager_anonymizeip", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SettingssalesOrderByWithAggregationInput.prototype, "tag_manager_contentexperiments", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SettingssalesOrderByWithAggregationInput.prototype, "tag_manager_containerid", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SettingssalesCountOrderByAggregateInput_1.SettingssalesCountOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SettingssalesCountOrderByAggregateInput_1.SettingssalesCountOrderByAggregateInput)
], SettingssalesOrderByWithAggregationInput.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SettingssalesAvgOrderByAggregateInput_1.SettingssalesAvgOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SettingssalesAvgOrderByAggregateInput_1.SettingssalesAvgOrderByAggregateInput)
], SettingssalesOrderByWithAggregationInput.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SettingssalesMaxOrderByAggregateInput_1.SettingssalesMaxOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SettingssalesMaxOrderByAggregateInput_1.SettingssalesMaxOrderByAggregateInput)
], SettingssalesOrderByWithAggregationInput.prototype, "_max", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SettingssalesMinOrderByAggregateInput_1.SettingssalesMinOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SettingssalesMinOrderByAggregateInput_1.SettingssalesMinOrderByAggregateInput)
], SettingssalesOrderByWithAggregationInput.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SettingssalesSumOrderByAggregateInput_1.SettingssalesSumOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SettingssalesSumOrderByAggregateInput_1.SettingssalesSumOrderByAggregateInput)
], SettingssalesOrderByWithAggregationInput.prototype, "_sum", void 0);
SettingssalesOrderByWithAggregationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("SettingssalesOrderByWithAggregationInput", {
        isAbstract: true
    })
], SettingssalesOrderByWithAggregationInput);
exports.SettingssalesOrderByWithAggregationInput = SettingssalesOrderByWithAggregationInput;
