"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteManyOccassionsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const OccassionsWhereInput_1 = require("../../../inputs/OccassionsWhereInput");
let DeleteManyOccassionsArgs = class DeleteManyOccassionsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OccassionsWhereInput_1.OccassionsWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OccassionsWhereInput_1.OccassionsWhereInput)
], DeleteManyOccassionsArgs.prototype, "where", void 0);
DeleteManyOccassionsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteManyOccassionsArgs);
exports.DeleteManyOccassionsArgs = DeleteManyOccassionsArgs;
