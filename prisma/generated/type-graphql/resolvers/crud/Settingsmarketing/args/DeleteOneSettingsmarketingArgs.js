"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteOneSettingsmarketingArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SettingsmarketingWhereUniqueInput_1 = require("../../../inputs/SettingsmarketingWhereUniqueInput");
let DeleteOneSettingsmarketingArgs = class DeleteOneSettingsmarketingArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SettingsmarketingWhereUniqueInput_1.SettingsmarketingWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", SettingsmarketingWhereUniqueInput_1.SettingsmarketingWhereUniqueInput)
], DeleteOneSettingsmarketingArgs.prototype, "where", void 0);
DeleteOneSettingsmarketingArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteOneSettingsmarketingArgs);
exports.DeleteOneSettingsmarketingArgs = DeleteOneSettingsmarketingArgs;
