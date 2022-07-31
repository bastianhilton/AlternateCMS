"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateOneSourceArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SourceCreateInput_1 = require("../../../inputs/SourceCreateInput");
let CreateOneSourceArgs = class CreateOneSourceArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SourceCreateInput_1.SourceCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", SourceCreateInput_1.SourceCreateInput)
], CreateOneSourceArgs.prototype, "data", void 0);
CreateOneSourceArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateOneSourceArgs);
exports.CreateOneSourceArgs = CreateOneSourceArgs;
