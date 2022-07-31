"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SettingscustomersSumAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const GraphQLScalars = tslib_1.__importStar(require("graphql-scalars"));
let SettingscustomersSumAggregate = class SettingscustomersSumAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", typeof BigInt === "function" ? BigInt : Object)
], SettingscustomersSumAggregate.prototype, "id", void 0);
SettingscustomersSumAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("SettingscustomersSumAggregate", {
        isAbstract: true
    })
], SettingscustomersSumAggregate);
exports.SettingscustomersSumAggregate = SettingscustomersSumAggregate;
