"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SettingsgeneralSumAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const GraphQLScalars = tslib_1.__importStar(require("graphql-scalars"));
let SettingsgeneralSumAggregate = class SettingsgeneralSumAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", typeof BigInt === "function" ? BigInt : Object)
], SettingsgeneralSumAggregate.prototype, "id", void 0);
SettingsgeneralSumAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("SettingsgeneralSumAggregate", {
        isAbstract: true
    })
], SettingsgeneralSumAggregate);
exports.SettingsgeneralSumAggregate = SettingsgeneralSumAggregate;
