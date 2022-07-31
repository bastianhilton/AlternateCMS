"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SettingshopAvgAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let SettingshopAvgAggregate = class SettingshopAvgAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], SettingshopAvgAggregate.prototype, "id", void 0);
SettingshopAvgAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("SettingshopAvgAggregate", {
        isAbstract: true
    })
], SettingshopAvgAggregate);
exports.SettingshopAvgAggregate = SettingshopAvgAggregate;
