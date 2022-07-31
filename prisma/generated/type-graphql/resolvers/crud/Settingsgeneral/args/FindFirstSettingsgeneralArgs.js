"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstSettingsgeneralArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SettingsgeneralOrderByWithRelationAndSearchRelevanceInput_1 = require("../../../inputs/SettingsgeneralOrderByWithRelationAndSearchRelevanceInput");
const SettingsgeneralWhereInput_1 = require("../../../inputs/SettingsgeneralWhereInput");
const SettingsgeneralWhereUniqueInput_1 = require("../../../inputs/SettingsgeneralWhereUniqueInput");
const SettingsgeneralScalarFieldEnum_1 = require("../../../../enums/SettingsgeneralScalarFieldEnum");
let FindFirstSettingsgeneralArgs = class FindFirstSettingsgeneralArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SettingsgeneralWhereInput_1.SettingsgeneralWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SettingsgeneralWhereInput_1.SettingsgeneralWhereInput)
], FindFirstSettingsgeneralArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [SettingsgeneralOrderByWithRelationAndSearchRelevanceInput_1.SettingsgeneralOrderByWithRelationAndSearchRelevanceInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindFirstSettingsgeneralArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SettingsgeneralWhereUniqueInput_1.SettingsgeneralWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SettingsgeneralWhereUniqueInput_1.SettingsgeneralWhereUniqueInput)
], FindFirstSettingsgeneralArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindFirstSettingsgeneralArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindFirstSettingsgeneralArgs.prototype, "skip", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [SettingsgeneralScalarFieldEnum_1.SettingsgeneralScalarFieldEnum], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindFirstSettingsgeneralArgs.prototype, "distinct", void 0);
FindFirstSettingsgeneralArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindFirstSettingsgeneralArgs);
exports.FindFirstSettingsgeneralArgs = FindFirstSettingsgeneralArgs;
