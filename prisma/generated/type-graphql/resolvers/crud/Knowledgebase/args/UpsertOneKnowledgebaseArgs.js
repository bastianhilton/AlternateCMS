"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertOneKnowledgebaseArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const KnowledgebaseCreateInput_1 = require("../../../inputs/KnowledgebaseCreateInput");
const KnowledgebaseUpdateInput_1 = require("../../../inputs/KnowledgebaseUpdateInput");
const KnowledgebaseWhereUniqueInput_1 = require("../../../inputs/KnowledgebaseWhereUniqueInput");
let UpsertOneKnowledgebaseArgs = class UpsertOneKnowledgebaseArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => KnowledgebaseWhereUniqueInput_1.KnowledgebaseWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", KnowledgebaseWhereUniqueInput_1.KnowledgebaseWhereUniqueInput)
], UpsertOneKnowledgebaseArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => KnowledgebaseCreateInput_1.KnowledgebaseCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", KnowledgebaseCreateInput_1.KnowledgebaseCreateInput)
], UpsertOneKnowledgebaseArgs.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => KnowledgebaseUpdateInput_1.KnowledgebaseUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", KnowledgebaseUpdateInput_1.KnowledgebaseUpdateInput)
], UpsertOneKnowledgebaseArgs.prototype, "update", void 0);
UpsertOneKnowledgebaseArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpsertOneKnowledgebaseArgs);
exports.UpsertOneKnowledgebaseArgs = UpsertOneKnowledgebaseArgs;
