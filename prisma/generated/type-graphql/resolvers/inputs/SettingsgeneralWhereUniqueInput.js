"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SettingsgeneralWhereUniqueInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const GraphQLScalars = tslib_1.__importStar(require("graphql-scalars"));
let SettingsgeneralWhereUniqueInput = class SettingsgeneralWhereUniqueInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", typeof BigInt === "function" ? BigInt : Object)
], SettingsgeneralWhereUniqueInput.prototype, "id", void 0);
SettingsgeneralWhereUniqueInput = tslib_1.__decorate([
    TypeGraphQL.InputType("SettingsgeneralWhereUniqueInput", {
        isAbstract: true
    })
], SettingsgeneralWhereUniqueInput);
exports.SettingsgeneralWhereUniqueInput = SettingsgeneralWhereUniqueInput;
