"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManySettingsmarketingArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SettingsmarketingCreateManyInput_1 = require("../../../inputs/SettingsmarketingCreateManyInput");
let CreateManySettingsmarketingArgs = class CreateManySettingsmarketingArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [SettingsmarketingCreateManyInput_1.SettingsmarketingCreateManyInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], CreateManySettingsmarketingArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], CreateManySettingsmarketingArgs.prototype, "skipDuplicates", void 0);
CreateManySettingsmarketingArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateManySettingsmarketingArgs);
exports.CreateManySettingsmarketingArgs = CreateManySettingsmarketingArgs;
