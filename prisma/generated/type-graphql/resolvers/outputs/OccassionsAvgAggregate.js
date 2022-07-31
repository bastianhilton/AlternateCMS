"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OccassionsAvgAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let OccassionsAvgAggregate = class OccassionsAvgAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], OccassionsAvgAggregate.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], OccassionsAvgAggregate.prototype, "products", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], OccassionsAvgAggregate.prototype, "wishlists", void 0);
OccassionsAvgAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("OccassionsAvgAggregate", {
        isAbstract: true
    })
], OccassionsAvgAggregate);
exports.OccassionsAvgAggregate = OccassionsAvgAggregate;
