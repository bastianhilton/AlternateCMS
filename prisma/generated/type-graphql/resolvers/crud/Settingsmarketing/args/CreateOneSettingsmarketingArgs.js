"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateOneSettingsmarketingArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SettingsmarketingCreateInput_1 = require("../../../inputs/SettingsmarketingCreateInput");
let CreateOneSettingsmarketingArgs = class CreateOneSettingsmarketingArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SettingsmarketingCreateInput_1.SettingsmarketingCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", SettingsmarketingCreateInput_1.SettingsmarketingCreateInput)
], CreateOneSettingsmarketingArgs.prototype, "data", void 0);
CreateOneSettingsmarketingArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateOneSettingsmarketingArgs);
exports.CreateOneSettingsmarketingArgs = CreateOneSettingsmarketingArgs;
