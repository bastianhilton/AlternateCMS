"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManyOccassionsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const OccassionsCreateManyInput_1 = require("../../../inputs/OccassionsCreateManyInput");
let CreateManyOccassionsArgs = class CreateManyOccassionsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OccassionsCreateManyInput_1.OccassionsCreateManyInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], CreateManyOccassionsArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], CreateManyOccassionsArgs.prototype, "skipDuplicates", void 0);
CreateManyOccassionsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateManyOccassionsArgs);
exports.CreateManyOccassionsArgs = CreateManyOccassionsArgs;
