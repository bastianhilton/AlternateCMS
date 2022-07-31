"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteOneProject_templatesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Project_templatesWhereUniqueInput_1 = require("../../../inputs/Project_templatesWhereUniqueInput");
let DeleteOneProject_templatesArgs = class DeleteOneProject_templatesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Project_templatesWhereUniqueInput_1.Project_templatesWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Project_templatesWhereUniqueInput_1.Project_templatesWhereUniqueInput)
], DeleteOneProject_templatesArgs.prototype, "where", void 0);
DeleteOneProject_templatesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteOneProject_templatesArgs);
exports.DeleteOneProject_templatesArgs = DeleteOneProject_templatesArgs;
