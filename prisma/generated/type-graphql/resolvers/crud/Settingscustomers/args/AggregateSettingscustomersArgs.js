"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateSettingscustomersArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SettingscustomersOrderByWithRelationAndSearchRelevanceInput_1 = require("../../../inputs/SettingscustomersOrderByWithRelationAndSearchRelevanceInput");
const SettingscustomersWhereInput_1 = require("../../../inputs/SettingscustomersWhereInput");
const SettingscustomersWhereUniqueInput_1 = require("../../../inputs/SettingscustomersWhereUniqueInput");
let AggregateSettingscustomersArgs = class AggregateSettingscustomersArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SettingscustomersWhereInput_1.SettingscustomersWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SettingscustomersWhereInput_1.SettingscustomersWhereInput)
], AggregateSettingscustomersArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [SettingscustomersOrderByWithRelationAndSearchRelevanceInput_1.SettingscustomersOrderByWithRelationAndSearchRelevanceInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], AggregateSettingscustomersArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SettingscustomersWhereUniqueInput_1.SettingscustomersWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SettingscustomersWhereUniqueInput_1.SettingscustomersWhereUniqueInput)
], AggregateSettingscustomersArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], AggregateSettingscustomersArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], AggregateSettingscustomersArgs.prototype, "skip", void 0);
AggregateSettingscustomersArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], AggregateSettingscustomersArgs);
exports.AggregateSettingscustomersArgs = AggregateSettingscustomersArgs;
