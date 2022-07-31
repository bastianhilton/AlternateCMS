"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SettingsmarketingOrderByWithAggregationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SettingsmarketingAvgOrderByAggregateInput_1 = require("../inputs/SettingsmarketingAvgOrderByAggregateInput");
const SettingsmarketingCountOrderByAggregateInput_1 = require("../inputs/SettingsmarketingCountOrderByAggregateInput");
const SettingsmarketingMaxOrderByAggregateInput_1 = require("../inputs/SettingsmarketingMaxOrderByAggregateInput");
const SettingsmarketingMinOrderByAggregateInput_1 = require("../inputs/SettingsmarketingMinOrderByAggregateInput");
const SettingsmarketingSumOrderByAggregateInput_1 = require("../inputs/SettingsmarketingSumOrderByAggregateInput");
const SortOrder_1 = require("../../enums/SortOrder");
let SettingsmarketingOrderByWithAggregationInput = class SettingsmarketingOrderByWithAggregationInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SettingsmarketingOrderByWithAggregationInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SettingsmarketingOrderByWithAggregationInput.prototype, "mail_port", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SettingsmarketingOrderByWithAggregationInput.prototype, "recaptcha_api", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SettingsmarketingOrderByWithAggregationInput.prototype, "adsense_api", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SettingsmarketingOrderByWithAggregationInput.prototype, "sitemap_url", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SettingsmarketingOrderByWithAggregationInput.prototype, "customer_data_lifetime", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SettingsmarketingOrderByWithAggregationInput.prototype, "mail_server", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SettingsmarketingCountOrderByAggregateInput_1.SettingsmarketingCountOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SettingsmarketingCountOrderByAggregateInput_1.SettingsmarketingCountOrderByAggregateInput)
], SettingsmarketingOrderByWithAggregationInput.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SettingsmarketingAvgOrderByAggregateInput_1.SettingsmarketingAvgOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SettingsmarketingAvgOrderByAggregateInput_1.SettingsmarketingAvgOrderByAggregateInput)
], SettingsmarketingOrderByWithAggregationInput.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SettingsmarketingMaxOrderByAggregateInput_1.SettingsmarketingMaxOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SettingsmarketingMaxOrderByAggregateInput_1.SettingsmarketingMaxOrderByAggregateInput)
], SettingsmarketingOrderByWithAggregationInput.prototype, "_max", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SettingsmarketingMinOrderByAggregateInput_1.SettingsmarketingMinOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SettingsmarketingMinOrderByAggregateInput_1.SettingsmarketingMinOrderByAggregateInput)
], SettingsmarketingOrderByWithAggregationInput.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SettingsmarketingSumOrderByAggregateInput_1.SettingsmarketingSumOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SettingsmarketingSumOrderByAggregateInput_1.SettingsmarketingSumOrderByAggregateInput)
], SettingsmarketingOrderByWithAggregationInput.prototype, "_sum", void 0);
SettingsmarketingOrderByWithAggregationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("SettingsmarketingOrderByWithAggregationInput", {
        isAbstract: true
    })
], SettingsmarketingOrderByWithAggregationInput);
exports.SettingsmarketingOrderByWithAggregationInput = SettingsmarketingOrderByWithAggregationInput;
