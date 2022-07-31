"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertOneGeneral_settingsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const General_settingsCreateInput_1 = require("../../../inputs/General_settingsCreateInput");
const General_settingsUpdateInput_1 = require("../../../inputs/General_settingsUpdateInput");
const General_settingsWhereUniqueInput_1 = require("../../../inputs/General_settingsWhereUniqueInput");
let UpsertOneGeneral_settingsArgs = class UpsertOneGeneral_settingsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => General_settingsWhereUniqueInput_1.General_settingsWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", General_settingsWhereUniqueInput_1.General_settingsWhereUniqueInput)
], UpsertOneGeneral_settingsArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => General_settingsCreateInput_1.General_settingsCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", General_settingsCreateInput_1.General_settingsCreateInput)
], UpsertOneGeneral_settingsArgs.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => General_settingsUpdateInput_1.General_settingsUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", General_settingsUpdateInput_1.General_settingsUpdateInput)
], UpsertOneGeneral_settingsArgs.prototype, "update", void 0);
UpsertOneGeneral_settingsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpsertOneGeneral_settingsArgs);
exports.UpsertOneGeneral_settingsArgs = UpsertOneGeneral_settingsArgs;
