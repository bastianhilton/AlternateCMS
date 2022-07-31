"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateSettingshopArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SettingshopOrderByWithRelationAndSearchRelevanceInput_1 = require("../../../inputs/SettingshopOrderByWithRelationAndSearchRelevanceInput");
const SettingshopWhereInput_1 = require("../../../inputs/SettingshopWhereInput");
const SettingshopWhereUniqueInput_1 = require("../../../inputs/SettingshopWhereUniqueInput");
let AggregateSettingshopArgs = class AggregateSettingshopArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SettingshopWhereInput_1.SettingshopWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SettingshopWhereInput_1.SettingshopWhereInput)
], AggregateSettingshopArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [SettingshopOrderByWithRelationAndSearchRelevanceInput_1.SettingshopOrderByWithRelationAndSearchRelevanceInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], AggregateSettingshopArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SettingshopWhereUniqueInput_1.SettingshopWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SettingshopWhereUniqueInput_1.SettingshopWhereUniqueInput)
], AggregateSettingshopArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], AggregateSettingshopArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], AggregateSettingshopArgs.prototype, "skip", void 0);
AggregateSettingshopArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], AggregateSettingshopArgs);
exports.AggregateSettingshopArgs = AggregateSettingshopArgs;
