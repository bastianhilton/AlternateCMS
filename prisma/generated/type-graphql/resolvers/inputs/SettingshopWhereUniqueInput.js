"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SettingshopWhereUniqueInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const GraphQLScalars = tslib_1.__importStar(require("graphql-scalars"));
let SettingshopWhereUniqueInput = class SettingshopWhereUniqueInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", typeof BigInt === "function" ? BigInt : Object)
], SettingshopWhereUniqueInput.prototype, "id", void 0);
SettingshopWhereUniqueInput = tslib_1.__decorate([
    TypeGraphQL.InputType("SettingshopWhereUniqueInput", {
        isAbstract: true
    })
], SettingshopWhereUniqueInput);
exports.SettingshopWhereUniqueInput = SettingshopWhereUniqueInput;
