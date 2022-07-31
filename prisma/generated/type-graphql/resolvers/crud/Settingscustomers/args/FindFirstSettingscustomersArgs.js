"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstSettingscustomersArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SettingscustomersOrderByWithRelationAndSearchRelevanceInput_1 = require("../../../inputs/SettingscustomersOrderByWithRelationAndSearchRelevanceInput");
const SettingscustomersWhereInput_1 = require("../../../inputs/SettingscustomersWhereInput");
const SettingscustomersWhereUniqueInput_1 = require("../../../inputs/SettingscustomersWhereUniqueInput");
const SettingscustomersScalarFieldEnum_1 = require("../../../../enums/SettingscustomersScalarFieldEnum");
let FindFirstSettingscustomersArgs = class FindFirstSettingscustomersArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SettingscustomersWhereInput_1.SettingscustomersWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SettingscustomersWhereInput_1.SettingscustomersWhereInput)
], FindFirstSettingscustomersArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [SettingscustomersOrderByWithRelationAndSearchRelevanceInput_1.SettingscustomersOrderByWithRelationAndSearchRelevanceInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindFirstSettingscustomersArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SettingscustomersWhereUniqueInput_1.SettingscustomersWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SettingscustomersWhereUniqueInput_1.SettingscustomersWhereUniqueInput)
], FindFirstSettingscustomersArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindFirstSettingscustomersArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindFirstSettingscustomersArgs.prototype, "skip", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [SettingscustomersScalarFieldEnum_1.SettingscustomersScalarFieldEnum], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindFirstSettingscustomersArgs.prototype, "distinct", void 0);
FindFirstSettingscustomersArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindFirstSettingscustomersArgs);
exports.FindFirstSettingscustomersArgs = FindFirstSettingscustomersArgs;
