"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteOneKnowledgebaseArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const KnowledgebaseWhereUniqueInput_1 = require("../../../inputs/KnowledgebaseWhereUniqueInput");
let DeleteOneKnowledgebaseArgs = class DeleteOneKnowledgebaseArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => KnowledgebaseWhereUniqueInput_1.KnowledgebaseWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", KnowledgebaseWhereUniqueInput_1.KnowledgebaseWhereUniqueInput)
], DeleteOneKnowledgebaseArgs.prototype, "where", void 0);
DeleteOneKnowledgebaseArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteOneKnowledgebaseArgs);
exports.DeleteOneKnowledgebaseArgs = DeleteOneKnowledgebaseArgs;
