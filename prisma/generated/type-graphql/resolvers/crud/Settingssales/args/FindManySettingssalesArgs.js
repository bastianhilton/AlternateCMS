"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindManySettingssalesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SettingssalesOrderByWithRelationAndSearchRelevanceInput_1 = require("../../../inputs/SettingssalesOrderByWithRelationAndSearchRelevanceInput");
const SettingssalesWhereInput_1 = require("../../../inputs/SettingssalesWhereInput");
const SettingssalesWhereUniqueInput_1 = require("../../../inputs/SettingssalesWhereUniqueInput");
const SettingssalesScalarFieldEnum_1 = require("../../../../enums/SettingssalesScalarFieldEnum");
let FindManySettingssalesArgs = class FindManySettingssalesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SettingssalesWhereInput_1.SettingssalesWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SettingssalesWhereInput_1.SettingssalesWhereInput)
], FindManySettingssalesArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [SettingssalesOrderByWithRelationAndSearchRelevanceInput_1.SettingssalesOrderByWithRelationAndSearchRelevanceInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindManySettingssalesArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SettingssalesWhereUniqueInput_1.SettingssalesWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SettingssalesWhereUniqueInput_1.SettingssalesWhereUniqueInput)
], FindManySettingssalesArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindManySettingssalesArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindManySettingssalesArgs.prototype, "skip", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [SettingssalesScalarFieldEnum_1.SettingssalesScalarFieldEnum], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindManySettingssalesArgs.prototype, "distinct", void 0);
FindManySettingssalesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindManySettingssalesArgs);
exports.FindManySettingssalesArgs = FindManySettingssalesArgs;
