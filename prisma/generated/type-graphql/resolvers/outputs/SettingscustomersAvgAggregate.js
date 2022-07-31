"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SettingscustomersAvgAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let SettingscustomersAvgAggregate = class SettingscustomersAvgAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], SettingscustomersAvgAggregate.prototype, "id", void 0);
SettingscustomersAvgAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("SettingscustomersAvgAggregate", {
        isAbstract: true
    })
], SettingscustomersAvgAggregate);
exports.SettingscustomersAvgAggregate = SettingscustomersAvgAggregate;
