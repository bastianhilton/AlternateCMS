"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SettingsgeneralGroupBy = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const GraphQLScalars = tslib_1.__importStar(require("graphql-scalars"));
const SettingsgeneralAvgAggregate_1 = require("../outputs/SettingsgeneralAvgAggregate");
const SettingsgeneralCountAggregate_1 = require("../outputs/SettingsgeneralCountAggregate");
const SettingsgeneralMaxAggregate_1 = require("../outputs/SettingsgeneralMaxAggregate");
const SettingsgeneralMinAggregate_1 = require("../outputs/SettingsgeneralMinAggregate");
const SettingsgeneralSumAggregate_1 = require("../outputs/SettingsgeneralSumAggregate");
let SettingsgeneralGroupBy = class SettingsgeneralGroupBy {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", typeof BigInt === "function" ? BigInt : Object)
], SettingsgeneralGroupBy.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], SettingsgeneralGroupBy.prototype, "created_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SettingsgeneralGroupBy.prototype, "site_title", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SettingsgeneralGroupBy.prototype, "site_tagline", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SettingsgeneralGroupBy.prototype, "site_website", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SettingsgeneralGroupBy.prototype, "email", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SettingsgeneralGroupBy.prototype, "aws_s3", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SettingsgeneralGroupBy.prototype, "google_drive", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SettingsgeneralCountAggregate_1.SettingsgeneralCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SettingsgeneralCountAggregate_1.SettingsgeneralCountAggregate)
], SettingsgeneralGroupBy.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SettingsgeneralAvgAggregate_1.SettingsgeneralAvgAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SettingsgeneralAvgAggregate_1.SettingsgeneralAvgAggregate)
], SettingsgeneralGroupBy.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SettingsgeneralSumAggregate_1.SettingsgeneralSumAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SettingsgeneralSumAggregate_1.SettingsgeneralSumAggregate)
], SettingsgeneralGroupBy.prototype, "_sum", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SettingsgeneralMinAggregate_1.SettingsgeneralMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SettingsgeneralMinAggregate_1.SettingsgeneralMinAggregate)
], SettingsgeneralGroupBy.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SettingsgeneralMaxAggregate_1.SettingsgeneralMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SettingsgeneralMaxAggregate_1.SettingsgeneralMaxAggregate)
], SettingsgeneralGroupBy.prototype, "_max", void 0);
SettingsgeneralGroupBy = tslib_1.__decorate([
    TypeGraphQL.ObjectType("SettingsgeneralGroupBy", {
        isAbstract: true
    })
], SettingsgeneralGroupBy);
exports.SettingsgeneralGroupBy = SettingsgeneralGroupBy;
