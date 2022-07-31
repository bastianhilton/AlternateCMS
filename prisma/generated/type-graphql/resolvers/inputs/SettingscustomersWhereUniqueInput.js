"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SettingscustomersWhereUniqueInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const GraphQLScalars = tslib_1.__importStar(require("graphql-scalars"));
let SettingscustomersWhereUniqueInput = class SettingscustomersWhereUniqueInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", typeof BigInt === "function" ? BigInt : Object)
], SettingscustomersWhereUniqueInput.prototype, "id", void 0);
SettingscustomersWhereUniqueInput = tslib_1.__decorate([
    TypeGraphQL.InputType("SettingscustomersWhereUniqueInput", {
        isAbstract: true
    })
], SettingscustomersWhereUniqueInput);
exports.SettingscustomersWhereUniqueInput = SettingscustomersWhereUniqueInput;
