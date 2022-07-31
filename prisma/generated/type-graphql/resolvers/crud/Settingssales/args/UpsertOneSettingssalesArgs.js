"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertOneSettingssalesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SettingssalesCreateInput_1 = require("../../../inputs/SettingssalesCreateInput");
const SettingssalesUpdateInput_1 = require("../../../inputs/SettingssalesUpdateInput");
const SettingssalesWhereUniqueInput_1 = require("../../../inputs/SettingssalesWhereUniqueInput");
let UpsertOneSettingssalesArgs = class UpsertOneSettingssalesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SettingssalesWhereUniqueInput_1.SettingssalesWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", SettingssalesWhereUniqueInput_1.SettingssalesWhereUniqueInput)
], UpsertOneSettingssalesArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SettingssalesCreateInput_1.SettingssalesCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", SettingssalesCreateInput_1.SettingssalesCreateInput)
], UpsertOneSettingssalesArgs.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SettingssalesUpdateInput_1.SettingssalesUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", SettingssalesUpdateInput_1.SettingssalesUpdateInput)
], UpsertOneSettingssalesArgs.prototype, "update", void 0);
UpsertOneSettingssalesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpsertOneSettingssalesArgs);
exports.UpsertOneSettingssalesArgs = UpsertOneSettingssalesArgs;
