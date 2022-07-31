"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateOneEmail_templatesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Email_templatesCreateInput_1 = require("../../../inputs/Email_templatesCreateInput");
let CreateOneEmail_templatesArgs = class CreateOneEmail_templatesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Email_templatesCreateInput_1.Email_templatesCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Email_templatesCreateInput_1.Email_templatesCreateInput)
], CreateOneEmail_templatesArgs.prototype, "data", void 0);
CreateOneEmail_templatesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateOneEmail_templatesArgs);
exports.CreateOneEmail_templatesArgs = CreateOneEmail_templatesArgs;
