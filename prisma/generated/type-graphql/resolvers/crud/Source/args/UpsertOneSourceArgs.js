"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertOneSourceArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SourceCreateInput_1 = require("../../../inputs/SourceCreateInput");
const SourceUpdateInput_1 = require("../../../inputs/SourceUpdateInput");
const SourceWhereUniqueInput_1 = require("../../../inputs/SourceWhereUniqueInput");
let UpsertOneSourceArgs = class UpsertOneSourceArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SourceWhereUniqueInput_1.SourceWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", SourceWhereUniqueInput_1.SourceWhereUniqueInput)
], UpsertOneSourceArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SourceCreateInput_1.SourceCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", SourceCreateInput_1.SourceCreateInput)
], UpsertOneSourceArgs.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SourceUpdateInput_1.SourceUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", SourceUpdateInput_1.SourceUpdateInput)
], UpsertOneSourceArgs.prototype, "update", void 0);
UpsertOneSourceArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpsertOneSourceArgs);
exports.UpsertOneSourceArgs = UpsertOneSourceArgs;
