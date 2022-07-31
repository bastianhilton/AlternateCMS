"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateOneProject_templatesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Project_templatesCreateInput_1 = require("../../../inputs/Project_templatesCreateInput");
let CreateOneProject_templatesArgs = class CreateOneProject_templatesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Project_templatesCreateInput_1.Project_templatesCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Project_templatesCreateInput_1.Project_templatesCreateInput)
], CreateOneProject_templatesArgs.prototype, "data", void 0);
CreateOneProject_templatesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateOneProject_templatesArgs);
exports.CreateOneProject_templatesArgs = CreateOneProject_templatesArgs;
