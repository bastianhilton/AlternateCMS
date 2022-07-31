"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstSettingssalesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SettingssalesOrderByWithRelationAndSearchRelevanceInput_1 = require("../../../inputs/SettingssalesOrderByWithRelationAndSearchRelevanceInput");
const SettingssalesWhereInput_1 = require("../../../inputs/SettingssalesWhereInput");
const SettingssalesWhereUniqueInput_1 = require("../../../inputs/SettingssalesWhereUniqueInput");
const SettingssalesScalarFieldEnum_1 = require("../../../../enums/SettingssalesScalarFieldEnum");
let FindFirstSettingssalesArgs = class FindFirstSettingssalesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SettingssalesWhereInput_1.SettingssalesWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SettingssalesWhereInput_1.SettingssalesWhereInput)
], FindFirstSettingssalesArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [SettingssalesOrderByWithRelationAndSearchRelevanceInput_1.SettingssalesOrderByWithRelationAndSearchRelevanceInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindFirstSettingssalesArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SettingssalesWhereUniqueInput_1.SettingssalesWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SettingssalesWhereUniqueInput_1.SettingssalesWhereUniqueInput)
], FindFirstSettingssalesArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindFirstSettingssalesArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindFirstSettingssalesArgs.prototype, "skip", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [SettingssalesScalarFieldEnum_1.SettingssalesScalarFieldEnum], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindFirstSettingssalesArgs.prototype, "distinct", void 0);
FindFirstSettingssalesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindFirstSettingssalesArgs);
exports.FindFirstSettingssalesArgs = FindFirstSettingssalesArgs;
