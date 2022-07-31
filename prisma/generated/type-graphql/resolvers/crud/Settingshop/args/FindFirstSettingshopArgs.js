"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstSettingshopArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SettingshopOrderByWithRelationAndSearchRelevanceInput_1 = require("../../../inputs/SettingshopOrderByWithRelationAndSearchRelevanceInput");
const SettingshopWhereInput_1 = require("../../../inputs/SettingshopWhereInput");
const SettingshopWhereUniqueInput_1 = require("../../../inputs/SettingshopWhereUniqueInput");
const SettingshopScalarFieldEnum_1 = require("../../../../enums/SettingshopScalarFieldEnum");
let FindFirstSettingshopArgs = class FindFirstSettingshopArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SettingshopWhereInput_1.SettingshopWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SettingshopWhereInput_1.SettingshopWhereInput)
], FindFirstSettingshopArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [SettingshopOrderByWithRelationAndSearchRelevanceInput_1.SettingshopOrderByWithRelationAndSearchRelevanceInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindFirstSettingshopArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SettingshopWhereUniqueInput_1.SettingshopWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SettingshopWhereUniqueInput_1.SettingshopWhereUniqueInput)
], FindFirstSettingshopArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindFirstSettingshopArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindFirstSettingshopArgs.prototype, "skip", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [SettingshopScalarFieldEnum_1.SettingshopScalarFieldEnum], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindFirstSettingshopArgs.prototype, "distinct", void 0);
FindFirstSettingshopArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindFirstSettingshopArgs);
exports.FindFirstSettingshopArgs = FindFirstSettingshopArgs;
