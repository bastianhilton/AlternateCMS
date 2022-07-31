"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SettingsgeneralAvgAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let SettingsgeneralAvgAggregate = class SettingsgeneralAvgAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], SettingsgeneralAvgAggregate.prototype, "id", void 0);
SettingsgeneralAvgAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("SettingsgeneralAvgAggregate", {
        isAbstract: true
    })
], SettingsgeneralAvgAggregate);
exports.SettingsgeneralAvgAggregate = SettingsgeneralAvgAggregate;
