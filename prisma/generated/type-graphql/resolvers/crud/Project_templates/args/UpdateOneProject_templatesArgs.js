"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateOneProject_templatesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Project_templatesUpdateInput_1 = require("../../../inputs/Project_templatesUpdateInput");
const Project_templatesWhereUniqueInput_1 = require("../../../inputs/Project_templatesWhereUniqueInput");
let UpdateOneProject_templatesArgs = class UpdateOneProject_templatesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Project_templatesUpdateInput_1.Project_templatesUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Project_templatesUpdateInput_1.Project_templatesUpdateInput)
], UpdateOneProject_templatesArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Project_templatesWhereUniqueInput_1.Project_templatesWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Project_templatesWhereUniqueInput_1.Project_templatesWhereUniqueInput)
], UpdateOneProject_templatesArgs.prototype, "where", void 0);
UpdateOneProject_templatesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateOneProject_templatesArgs);
exports.UpdateOneProject_templatesArgs = UpdateOneProject_templatesArgs;
