"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindManySettingsmarketingArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SettingsmarketingOrderByWithRelationAndSearchRelevanceInput_1 = require("../../../inputs/SettingsmarketingOrderByWithRelationAndSearchRelevanceInput");
const SettingsmarketingWhereInput_1 = require("../../../inputs/SettingsmarketingWhereInput");
const SettingsmarketingWhereUniqueInput_1 = require("../../../inputs/SettingsmarketingWhereUniqueInput");
const SettingsmarketingScalarFieldEnum_1 = require("../../../../enums/SettingsmarketingScalarFieldEnum");
let FindManySettingsmarketingArgs = class FindManySettingsmarketingArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SettingsmarketingWhereInput_1.SettingsmarketingWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SettingsmarketingWhereInput_1.SettingsmarketingWhereInput)
], FindManySettingsmarketingArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [SettingsmarketingOrderByWithRelationAndSearchRelevanceInput_1.SettingsmarketingOrderByWithRelationAndSearchRelevanceInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindManySettingsmarketingArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SettingsmarketingWhereUniqueInput_1.SettingsmarketingWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SettingsmarketingWhereUniqueInput_1.SettingsmarketingWhereUniqueInput)
], FindManySettingsmarketingArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindManySettingsmarketingArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindManySettingsmarketingArgs.prototype, "skip", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [SettingsmarketingScalarFieldEnum_1.SettingsmarketingScalarFieldEnum], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindManySettingsmarketingArgs.prototype, "distinct", void 0);
FindManySettingsmarketingArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindManySettingsmarketingArgs);
exports.FindManySettingsmarketingArgs = FindManySettingsmarketingArgs;
