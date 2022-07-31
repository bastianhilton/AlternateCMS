"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueSettingsmarketingArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SettingsmarketingWhereUniqueInput_1 = require("../../../inputs/SettingsmarketingWhereUniqueInput");
let FindUniqueSettingsmarketingArgs = class FindUniqueSettingsmarketingArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SettingsmarketingWhereUniqueInput_1.SettingsmarketingWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", SettingsmarketingWhereUniqueInput_1.SettingsmarketingWhereUniqueInput)
], FindUniqueSettingsmarketingArgs.prototype, "where", void 0);
FindUniqueSettingsmarketingArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindUniqueSettingsmarketingArgs);
exports.FindUniqueSettingsmarketingArgs = FindUniqueSettingsmarketingArgs;
