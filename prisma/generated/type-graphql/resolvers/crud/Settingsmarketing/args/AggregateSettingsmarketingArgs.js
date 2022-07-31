"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateSettingsmarketingArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SettingsmarketingOrderByWithRelationAndSearchRelevanceInput_1 = require("../../../inputs/SettingsmarketingOrderByWithRelationAndSearchRelevanceInput");
const SettingsmarketingWhereInput_1 = require("../../../inputs/SettingsmarketingWhereInput");
const SettingsmarketingWhereUniqueInput_1 = require("../../../inputs/SettingsmarketingWhereUniqueInput");
let AggregateSettingsmarketingArgs = class AggregateSettingsmarketingArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SettingsmarketingWhereInput_1.SettingsmarketingWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SettingsmarketingWhereInput_1.SettingsmarketingWhereInput)
], AggregateSettingsmarketingArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [SettingsmarketingOrderByWithRelationAndSearchRelevanceInput_1.SettingsmarketingOrderByWithRelationAndSearchRelevanceInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], AggregateSettingsmarketingArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SettingsmarketingWhereUniqueInput_1.SettingsmarketingWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SettingsmarketingWhereUniqueInput_1.SettingsmarketingWhereUniqueInput)
], AggregateSettingsmarketingArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], AggregateSettingsmarketingArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], AggregateSettingsmarketingArgs.prototype, "skip", void 0);
AggregateSettingsmarketingArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], AggregateSettingsmarketingArgs);
exports.AggregateSettingsmarketingArgs = AggregateSettingsmarketingArgs;
