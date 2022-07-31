"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateOneKnowledgebaseArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const KnowledgebaseCreateInput_1 = require("../../../inputs/KnowledgebaseCreateInput");
let CreateOneKnowledgebaseArgs = class CreateOneKnowledgebaseArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => KnowledgebaseCreateInput_1.KnowledgebaseCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", KnowledgebaseCreateInput_1.KnowledgebaseCreateInput)
], CreateOneKnowledgebaseArgs.prototype, "data", void 0);
CreateOneKnowledgebaseArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateOneKnowledgebaseArgs);
exports.CreateOneKnowledgebaseArgs = CreateOneKnowledgebaseArgs;
