"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SettingssalesAvgAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let SettingssalesAvgAggregate = class SettingssalesAvgAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], SettingssalesAvgAggregate.prototype, "id", void 0);
SettingssalesAvgAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("SettingssalesAvgAggregate", {
        isAbstract: true
    })
], SettingssalesAvgAggregate);
exports.SettingssalesAvgAggregate = SettingssalesAvgAggregate;
