"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindManySettingsgeneralArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SettingsgeneralOrderByWithRelationAndSearchRelevanceInput_1 = require("../../../inputs/SettingsgeneralOrderByWithRelationAndSearchRelevanceInput");
const SettingsgeneralWhereInput_1 = require("../../../inputs/SettingsgeneralWhereInput");
const SettingsgeneralWhereUniqueInput_1 = require("../../../inputs/SettingsgeneralWhereUniqueInput");
const SettingsgeneralScalarFieldEnum_1 = require("../../../../enums/SettingsgeneralScalarFieldEnum");
let FindManySettingsgeneralArgs = class FindManySettingsgeneralArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SettingsgeneralWhereInput_1.SettingsgeneralWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SettingsgeneralWhereInput_1.SettingsgeneralWhereInput)
], FindManySettingsgeneralArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [SettingsgeneralOrderByWithRelationAndSearchRelevanceInput_1.SettingsgeneralOrderByWithRelationAndSearchRelevanceInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindManySettingsgeneralArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SettingsgeneralWhereUniqueInput_1.SettingsgeneralWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SettingsgeneralWhereUniqueInput_1.SettingsgeneralWhereUniqueInput)
], FindManySettingsgeneralArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindManySettingsgeneralArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindManySettingsgeneralArgs.prototype, "skip", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [SettingsgeneralScalarFieldEnum_1.SettingsgeneralScalarFieldEnum], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindManySettingsgeneralArgs.prototype, "distinct", void 0);
FindManySettingsgeneralArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindManySettingsgeneralArgs);
exports.FindManySettingsgeneralArgs = FindManySettingsgeneralArgs;
