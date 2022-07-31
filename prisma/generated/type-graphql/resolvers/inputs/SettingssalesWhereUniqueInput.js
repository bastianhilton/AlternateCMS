"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SettingssalesWhereUniqueInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const GraphQLScalars = tslib_1.__importStar(require("graphql-scalars"));
let SettingssalesWhereUniqueInput = class SettingssalesWhereUniqueInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", typeof BigInt === "function" ? BigInt : Object)
], SettingssalesWhereUniqueInput.prototype, "id", void 0);
SettingssalesWhereUniqueInput = tslib_1.__decorate([
    TypeGraphQL.InputType("SettingssalesWhereUniqueInput", {
        isAbstract: true
    })
], SettingssalesWhereUniqueInput);
exports.SettingssalesWhereUniqueInput = SettingssalesWhereUniqueInput;
