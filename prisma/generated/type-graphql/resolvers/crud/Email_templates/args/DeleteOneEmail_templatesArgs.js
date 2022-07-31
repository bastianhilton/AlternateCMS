"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteOneEmail_templatesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Email_templatesWhereUniqueInput_1 = require("../../../inputs/Email_templatesWhereUniqueInput");
let DeleteOneEmail_templatesArgs = class DeleteOneEmail_templatesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Email_templatesWhereUniqueInput_1.Email_templatesWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Email_templatesWhereUniqueInput_1.Email_templatesWhereUniqueInput)
], DeleteOneEmail_templatesArgs.prototype, "where", void 0);
DeleteOneEmail_templatesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteOneEmail_templatesArgs);
exports.DeleteOneEmail_templatesArgs = DeleteOneEmail_templatesArgs;
