"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertOneSettingsmarketingArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SettingsmarketingCreateInput_1 = require("../../../inputs/SettingsmarketingCreateInput");
const SettingsmarketingUpdateInput_1 = require("../../../inputs/SettingsmarketingUpdateInput");
const SettingsmarketingWhereUniqueInput_1 = require("../../../inputs/SettingsmarketingWhereUniqueInput");
let UpsertOneSettingsmarketingArgs = class UpsertOneSettingsmarketingArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SettingsmarketingWhereUniqueInput_1.SettingsmarketingWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", SettingsmarketingWhereUniqueInput_1.SettingsmarketingWhereUniqueInput)
], UpsertOneSettingsmarketingArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SettingsmarketingCreateInput_1.SettingsmarketingCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", SettingsmarketingCreateInput_1.SettingsmarketingCreateInput)
], UpsertOneSettingsmarketingArgs.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SettingsmarketingUpdateInput_1.SettingsmarketingUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", SettingsmarketingUpdateInput_1.SettingsmarketingUpdateInput)
], UpsertOneSettingsmarketingArgs.prototype, "update", void 0);
UpsertOneSettingsmarketingArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpsertOneSettingsmarketingArgs);
exports.UpsertOneSettingsmarketingArgs = UpsertOneSettingsmarketingArgs;
