"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManyOccassionsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const OccassionsUpdateManyMutationInput_1 = require("../../../inputs/OccassionsUpdateManyMutationInput");
const OccassionsWhereInput_1 = require("../../../inputs/OccassionsWhereInput");
let UpdateManyOccassionsArgs = class UpdateManyOccassionsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OccassionsUpdateManyMutationInput_1.OccassionsUpdateManyMutationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", OccassionsUpdateManyMutationInput_1.OccassionsUpdateManyMutationInput)
], UpdateManyOccassionsArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OccassionsWhereInput_1.OccassionsWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OccassionsWhereInput_1.OccassionsWhereInput)
], UpdateManyOccassionsArgs.prototype, "where", void 0);
UpdateManyOccassionsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateManyOccassionsArgs);
exports.UpdateManyOccassionsArgs = UpdateManyOccassionsArgs;
