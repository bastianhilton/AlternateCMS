"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertOneOccassionsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const OccassionsCreateInput_1 = require("../../../inputs/OccassionsCreateInput");
const OccassionsUpdateInput_1 = require("../../../inputs/OccassionsUpdateInput");
const OccassionsWhereUniqueInput_1 = require("../../../inputs/OccassionsWhereUniqueInput");
let UpsertOneOccassionsArgs = class UpsertOneOccassionsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OccassionsWhereUniqueInput_1.OccassionsWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", OccassionsWhereUniqueInput_1.OccassionsWhereUniqueInput)
], UpsertOneOccassionsArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OccassionsCreateInput_1.OccassionsCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", OccassionsCreateInput_1.OccassionsCreateInput)
], UpsertOneOccassionsArgs.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OccassionsUpdateInput_1.OccassionsUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", OccassionsUpdateInput_1.OccassionsUpdateInput)
], UpsertOneOccassionsArgs.prototype, "update", void 0);
UpsertOneOccassionsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpsertOneOccassionsArgs);
exports.UpsertOneOccassionsArgs = UpsertOneOccassionsArgs;
