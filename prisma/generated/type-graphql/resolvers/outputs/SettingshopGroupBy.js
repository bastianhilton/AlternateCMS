"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SettingshopGroupBy = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const GraphQLScalars = tslib_1.__importStar(require("graphql-scalars"));
const SettingshopAvgAggregate_1 = require("../outputs/SettingshopAvgAggregate");
const SettingshopCountAggregate_1 = require("../outputs/SettingshopCountAggregate");
const SettingshopMaxAggregate_1 = require("../outputs/SettingshopMaxAggregate");
const SettingshopMinAggregate_1 = require("../outputs/SettingshopMinAggregate");
const SettingshopSumAggregate_1 = require("../outputs/SettingshopSumAggregate");
let SettingshopGroupBy = class SettingshopGroupBy {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", typeof BigInt === "function" ? BigInt : Object)
], SettingshopGroupBy.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SettingshopGroupBy.prototype, "enable_product_assignment", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SettingshopGroupBy.prototype, "product_videos", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SettingshopGroupBy.prototype, "seller_payouts", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SettingshopGroupBy.prototype, "admin_approval", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SettingshopGroupBy.prototype, "enable_review_system", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SettingshopGroupBy.prototype, "customer_rate_vendor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SettingshopGroupBy.prototype, "multishipping", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SettingshopGroupBy.prototype, "vendor_transaction_id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SettingshopGroupBy.prototype, "enable_vendor_product_attribute", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SettingshopCountAggregate_1.SettingshopCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SettingshopCountAggregate_1.SettingshopCountAggregate)
], SettingshopGroupBy.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SettingshopAvgAggregate_1.SettingshopAvgAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SettingshopAvgAggregate_1.SettingshopAvgAggregate)
], SettingshopGroupBy.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SettingshopSumAggregate_1.SettingshopSumAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SettingshopSumAggregate_1.SettingshopSumAggregate)
], SettingshopGroupBy.prototype, "_sum", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SettingshopMinAggregate_1.SettingshopMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SettingshopMinAggregate_1.SettingshopMinAggregate)
], SettingshopGroupBy.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SettingshopMaxAggregate_1.SettingshopMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SettingshopMaxAggregate_1.SettingshopMaxAggregate)
], SettingshopGroupBy.prototype, "_max", void 0);
SettingshopGroupBy = tslib_1.__decorate([
    TypeGraphQL.ObjectType("SettingshopGroupBy", {
        isAbstract: true
    })
], SettingshopGroupBy);
exports.SettingshopGroupBy = SettingshopGroupBy;
