"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SettingsgeneralOrderByWithAggregationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SettingsgeneralAvgOrderByAggregateInput_1 = require("../inputs/SettingsgeneralAvgOrderByAggregateInput");
const SettingsgeneralCountOrderByAggregateInput_1 = require("../inputs/SettingsgeneralCountOrderByAggregateInput");
const SettingsgeneralMaxOrderByAggregateInput_1 = require("../inputs/SettingsgeneralMaxOrderByAggregateInput");
const SettingsgeneralMinOrderByAggregateInput_1 = require("../inputs/SettingsgeneralMinOrderByAggregateInput");
const SettingsgeneralSumOrderByAggregateInput_1 = require("../inputs/SettingsgeneralSumOrderByAggregateInput");
const SortOrder_1 = require("../../enums/SortOrder");
let SettingsgeneralOrderByWithAggregationInput = class SettingsgeneralOrderByWithAggregationInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SettingsgeneralOrderByWithAggregationInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SettingsgeneralOrderByWithAggregationInput.prototype, "created_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SettingsgeneralOrderByWithAggregationInput.prototype, "site_title", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SettingsgeneralOrderByWithAggregationInput.prototype, "site_tagline", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SettingsgeneralOrderByWithAggregationInput.prototype, "site_website", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SettingsgeneralOrderByWithAggregationInput.prototype, "email", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SettingsgeneralOrderByWithAggregationInput.prototype, "aws_s3", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SettingsgeneralOrderByWithAggregationInput.prototype, "google_drive", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SettingsgeneralCountOrderByAggregateInput_1.SettingsgeneralCountOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SettingsgeneralCountOrderByAggregateInput_1.SettingsgeneralCountOrderByAggregateInput)
], SettingsgeneralOrderByWithAggregationInput.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SettingsgeneralAvgOrderByAggregateInput_1.SettingsgeneralAvgOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SettingsgeneralAvgOrderByAggregateInput_1.SettingsgeneralAvgOrderByAggregateInput)
], SettingsgeneralOrderByWithAggregationInput.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SettingsgeneralMaxOrderByAggregateInput_1.SettingsgeneralMaxOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SettingsgeneralMaxOrderByAggregateInput_1.SettingsgeneralMaxOrderByAggregateInput)
], SettingsgeneralOrderByWithAggregationInput.prototype, "_max", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SettingsgeneralMinOrderByAggregateInput_1.SettingsgeneralMinOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SettingsgeneralMinOrderByAggregateInput_1.SettingsgeneralMinOrderByAggregateInput)
], SettingsgeneralOrderByWithAggregationInput.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SettingsgeneralSumOrderByAggregateInput_1.SettingsgeneralSumOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SettingsgeneralSumOrderByAggregateInput_1.SettingsgeneralSumOrderByAggregateInput)
], SettingsgeneralOrderByWithAggregationInput.prototype, "_sum", void 0);
SettingsgeneralOrderByWithAggregationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("SettingsgeneralOrderByWithAggregationInput", {
        isAbstract: true
    })
], SettingsgeneralOrderByWithAggregationInput);
exports.SettingsgeneralOrderByWithAggregationInput = SettingsgeneralOrderByWithAggregationInput;
