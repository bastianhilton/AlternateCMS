"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateSettingssalesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SettingssalesOrderByWithRelationAndSearchRelevanceInput_1 = require("../../../inputs/SettingssalesOrderByWithRelationAndSearchRelevanceInput");
const SettingssalesWhereInput_1 = require("../../../inputs/SettingssalesWhereInput");
const SettingssalesWhereUniqueInput_1 = require("../../../inputs/SettingssalesWhereUniqueInput");
let AggregateSettingssalesArgs = class AggregateSettingssalesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SettingssalesWhereInput_1.SettingssalesWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SettingssalesWhereInput_1.SettingssalesWhereInput)
], AggregateSettingssalesArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [SettingssalesOrderByWithRelationAndSearchRelevanceInput_1.SettingssalesOrderByWithRelationAndSearchRelevanceInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], AggregateSettingssalesArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SettingssalesWhereUniqueInput_1.SettingssalesWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SettingssalesWhereUniqueInput_1.SettingssalesWhereUniqueInput)
], AggregateSettingssalesArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], AggregateSettingssalesArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], AggregateSettingssalesArgs.prototype, "skip", void 0);
AggregateSettingssalesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], AggregateSettingssalesArgs);
exports.AggregateSettingssalesArgs = AggregateSettingssalesArgs;
