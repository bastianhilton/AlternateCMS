"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueOccassionsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const OccassionsWhereUniqueInput_1 = require("../../../inputs/OccassionsWhereUniqueInput");
let FindUniqueOccassionsArgs = class FindUniqueOccassionsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OccassionsWhereUniqueInput_1.OccassionsWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", OccassionsWhereUniqueInput_1.OccassionsWhereUniqueInput)
], FindUniqueOccassionsArgs.prototype, "where", void 0);
FindUniqueOccassionsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindUniqueOccassionsArgs);
exports.FindUniqueOccassionsArgs = FindUniqueOccassionsArgs;
