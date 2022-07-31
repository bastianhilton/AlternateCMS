"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteOneSourceArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SourceWhereUniqueInput_1 = require("../../../inputs/SourceWhereUniqueInput");
let DeleteOneSourceArgs = class DeleteOneSourceArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SourceWhereUniqueInput_1.SourceWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", SourceWhereUniqueInput_1.SourceWhereUniqueInput)
], DeleteOneSourceArgs.prototype, "where", void 0);
DeleteOneSourceArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteOneSourceArgs);
exports.DeleteOneSourceArgs = DeleteOneSourceArgs;
