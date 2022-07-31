"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SettingshopOrderByWithAggregationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SettingshopAvgOrderByAggregateInput_1 = require("../inputs/SettingshopAvgOrderByAggregateInput");
const SettingshopCountOrderByAggregateInput_1 = require("../inputs/SettingshopCountOrderByAggregateInput");
const SettingshopMaxOrderByAggregateInput_1 = require("../inputs/SettingshopMaxOrderByAggregateInput");
const SettingshopMinOrderByAggregateInput_1 = require("../inputs/SettingshopMinOrderByAggregateInput");
const SettingshopSumOrderByAggregateInput_1 = require("../inputs/SettingshopSumOrderByAggregateInput");
const SortOrder_1 = require("../../enums/SortOrder");
let SettingshopOrderByWithAggregationInput = class SettingshopOrderByWithAggregationInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SettingshopOrderByWithAggregationInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SettingshopOrderByWithAggregationInput.prototype, "enable_product_assignment", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SettingshopOrderByWithAggregationInput.prototype, "product_videos", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SettingshopOrderByWithAggregationInput.prototype, "seller_payouts", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SettingshopOrderByWithAggregationInput.prototype, "admin_approval", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SettingshopOrderByWithAggregationInput.prototype, "enable_review_system", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SettingshopOrderByWithAggregationInput.prototype, "customer_rate_vendor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SettingshopOrderByWithAggregationInput.prototype, "multishipping", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SettingshopOrderByWithAggregationInput.prototype, "vendor_transaction_id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SettingshopOrderByWithAggregationInput.prototype, "enable_vendor_product_attribute", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SettingshopCountOrderByAggregateInput_1.SettingshopCountOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SettingshopCountOrderByAggregateInput_1.SettingshopCountOrderByAggregateInput)
], SettingshopOrderByWithAggregationInput.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SettingshopAvgOrderByAggregateInput_1.SettingshopAvgOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SettingshopAvgOrderByAggregateInput_1.SettingshopAvgOrderByAggregateInput)
], SettingshopOrderByWithAggregationInput.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SettingshopMaxOrderByAggregateInput_1.SettingshopMaxOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SettingshopMaxOrderByAggregateInput_1.SettingshopMaxOrderByAggregateInput)
], SettingshopOrderByWithAggregationInput.prototype, "_max", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SettingshopMinOrderByAggregateInput_1.SettingshopMinOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SettingshopMinOrderByAggregateInput_1.SettingshopMinOrderByAggregateInput)
], SettingshopOrderByWithAggregationInput.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SettingshopSumOrderByAggregateInput_1.SettingshopSumOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SettingshopSumOrderByAggregateInput_1.SettingshopSumOrderByAggregateInput)
], SettingshopOrderByWithAggregationInput.prototype, "_sum", void 0);
SettingshopOrderByWithAggregationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("SettingshopOrderByWithAggregationInput", {
        isAbstract: true
    })
], SettingshopOrderByWithAggregationInput);
exports.SettingshopOrderByWithAggregationInput = SettingshopOrderByWithAggregationInput;
