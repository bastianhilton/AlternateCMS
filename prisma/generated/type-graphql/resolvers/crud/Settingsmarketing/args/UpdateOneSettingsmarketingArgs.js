"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateOneSettingsmarketingArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SettingsmarketingUpdateInput_1 = require("../../../inputs/SettingsmarketingUpdateInput");
const SettingsmarketingWhereUniqueInput_1 = require("../../../inputs/SettingsmarketingWhereUniqueInput");
let UpdateOneSettingsmarketingArgs = class UpdateOneSettingsmarketingArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SettingsmarketingUpdateInput_1.SettingsmarketingUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", SettingsmarketingUpdateInput_1.SettingsmarketingUpdateInput)
], UpdateOneSettingsmarketingArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SettingsmarketingWhereUniqueInput_1.SettingsmarketingWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", SettingsmarketingWhereUniqueInput_1.SettingsmarketingWhereUniqueInput)
], UpdateOneSettingsmarketingArgs.prototype, "where", void 0);
UpdateOneSettingsmarketingArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateOneSettingsmarketingArgs);
exports.UpdateOneSettingsmarketingArgs = UpdateOneSettingsmarketingArgs;
