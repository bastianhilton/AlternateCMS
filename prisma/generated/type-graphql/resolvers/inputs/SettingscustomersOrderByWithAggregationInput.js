"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SettingscustomersOrderByWithAggregationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SettingscustomersAvgOrderByAggregateInput_1 = require("../inputs/SettingscustomersAvgOrderByAggregateInput");
const SettingscustomersCountOrderByAggregateInput_1 = require("../inputs/SettingscustomersCountOrderByAggregateInput");
const SettingscustomersMaxOrderByAggregateInput_1 = require("../inputs/SettingscustomersMaxOrderByAggregateInput");
const SettingscustomersMinOrderByAggregateInput_1 = require("../inputs/SettingscustomersMinOrderByAggregateInput");
const SettingscustomersSumOrderByAggregateInput_1 = require("../inputs/SettingscustomersSumOrderByAggregateInput");
const SortOrder_1 = require("../../enums/SortOrder");
let SettingscustomersOrderByWithAggregationInput = class SettingscustomersOrderByWithAggregationInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SettingscustomersOrderByWithAggregationInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SettingscustomersOrderByWithAggregationInput.prototype, "created_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SettingscustomersOrderByWithAggregationInput.prototype, "login_as_customer", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SettingscustomersOrderByWithAggregationInput.prototype, "share_customer_accounts", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SettingscustomersOrderByWithAggregationInput.prototype, "online_minutes_interval", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SettingscustomersOrderByWithAggregationInput.prototype, "customer_data_lifetime", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SettingscustomersOrderByWithAggregationInput.prototype, "email_after_registration", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SettingscustomersCountOrderByAggregateInput_1.SettingscustomersCountOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SettingscustomersCountOrderByAggregateInput_1.SettingscustomersCountOrderByAggregateInput)
], SettingscustomersOrderByWithAggregationInput.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SettingscustomersAvgOrderByAggregateInput_1.SettingscustomersAvgOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SettingscustomersAvgOrderByAggregateInput_1.SettingscustomersAvgOrderByAggregateInput)
], SettingscustomersOrderByWithAggregationInput.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SettingscustomersMaxOrderByAggregateInput_1.SettingscustomersMaxOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SettingscustomersMaxOrderByAggregateInput_1.SettingscustomersMaxOrderByAggregateInput)
], SettingscustomersOrderByWithAggregationInput.prototype, "_max", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SettingscustomersMinOrderByAggregateInput_1.SettingscustomersMinOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SettingscustomersMinOrderByAggregateInput_1.SettingscustomersMinOrderByAggregateInput)
], SettingscustomersOrderByWithAggregationInput.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SettingscustomersSumOrderByAggregateInput_1.SettingscustomersSumOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SettingscustomersSumOrderByAggregateInput_1.SettingscustomersSumOrderByAggregateInput)
], SettingscustomersOrderByWithAggregationInput.prototype, "_sum", void 0);
SettingscustomersOrderByWithAggregationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("SettingscustomersOrderByWithAggregationInput", {
        isAbstract: true
    })
], SettingscustomersOrderByWithAggregationInput);
exports.SettingscustomersOrderByWithAggregationInput = SettingscustomersOrderByWithAggregationInput;
