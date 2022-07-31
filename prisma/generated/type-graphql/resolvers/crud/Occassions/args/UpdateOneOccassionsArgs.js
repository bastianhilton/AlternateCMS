"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateOneOccassionsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const OccassionsUpdateInput_1 = require("../../../inputs/OccassionsUpdateInput");
const OccassionsWhereUniqueInput_1 = require("../../../inputs/OccassionsWhereUniqueInput");
let UpdateOneOccassionsArgs = class UpdateOneOccassionsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OccassionsUpdateInput_1.OccassionsUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", OccassionsUpdateInput_1.OccassionsUpdateInput)
], UpdateOneOccassionsArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OccassionsWhereUniqueInput_1.OccassionsWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", OccassionsWhereUniqueInput_1.OccassionsWhereUniqueInput)
], UpdateOneOccassionsArgs.prototype, "where", void 0);
UpdateOneOccassionsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateOneOccassionsArgs);
exports.UpdateOneOccassionsArgs = UpdateOneOccassionsArgs;
