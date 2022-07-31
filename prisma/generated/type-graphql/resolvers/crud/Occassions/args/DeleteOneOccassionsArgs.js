"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteOneOccassionsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const OccassionsWhereUniqueInput_1 = require("../../../inputs/OccassionsWhereUniqueInput");
let DeleteOneOccassionsArgs = class DeleteOneOccassionsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OccassionsWhereUniqueInput_1.OccassionsWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", OccassionsWhereUniqueInput_1.OccassionsWhereUniqueInput)
], DeleteOneOccassionsArgs.prototype, "where", void 0);
DeleteOneOccassionsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteOneOccassionsArgs);
exports.DeleteOneOccassionsArgs = DeleteOneOccassionsArgs;
