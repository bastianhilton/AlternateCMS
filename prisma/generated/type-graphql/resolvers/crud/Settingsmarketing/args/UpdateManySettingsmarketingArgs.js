"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManySettingsmarketingArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SettingsmarketingUpdateManyMutationInput_1 = require("../../../inputs/SettingsmarketingUpdateManyMutationInput");
const SettingsmarketingWhereInput_1 = require("../../../inputs/SettingsmarketingWhereInput");
let UpdateManySettingsmarketingArgs = class UpdateManySettingsmarketingArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SettingsmarketingUpdateManyMutationInput_1.SettingsmarketingUpdateManyMutationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", SettingsmarketingUpdateManyMutationInput_1.SettingsmarketingUpdateManyMutationInput)
], UpdateManySettingsmarketingArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SettingsmarketingWhereInput_1.SettingsmarketingWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SettingsmarketingWhereInput_1.SettingsmarketingWhereInput)
], UpdateManySettingsmarketingArgs.prototype, "where", void 0);
UpdateManySettingsmarketingArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateManySettingsmarketingArgs);
exports.UpdateManySettingsmarketingArgs = UpdateManySettingsmarketingArgs;
