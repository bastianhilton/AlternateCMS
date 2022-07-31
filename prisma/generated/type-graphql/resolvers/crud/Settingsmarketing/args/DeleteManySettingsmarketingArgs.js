"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteManySettingsmarketingArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SettingsmarketingWhereInput_1 = require("../../../inputs/SettingsmarketingWhereInput");
let DeleteManySettingsmarketingArgs = class DeleteManySettingsmarketingArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SettingsmarketingWhereInput_1.SettingsmarketingWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SettingsmarketingWhereInput_1.SettingsmarketingWhereInput)
], DeleteManySettingsmarketingArgs.prototype, "where", void 0);
DeleteManySettingsmarketingArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteManySettingsmarketingArgs);
exports.DeleteManySettingsmarketingArgs = DeleteManySettingsmarketingArgs;
