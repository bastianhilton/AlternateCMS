"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateOneEmail_templatesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Email_templatesUpdateInput_1 = require("../../../inputs/Email_templatesUpdateInput");
const Email_templatesWhereUniqueInput_1 = require("../../../inputs/Email_templatesWhereUniqueInput");
let UpdateOneEmail_templatesArgs = class UpdateOneEmail_templatesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Email_templatesUpdateInput_1.Email_templatesUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Email_templatesUpdateInput_1.Email_templatesUpdateInput)
], UpdateOneEmail_templatesArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Email_templatesWhereUniqueInput_1.Email_templatesWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Email_templatesWhereUniqueInput_1.Email_templatesWhereUniqueInput)
], UpdateOneEmail_templatesArgs.prototype, "where", void 0);
UpdateOneEmail_templatesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateOneEmail_templatesArgs);
exports.UpdateOneEmail_templatesArgs = UpdateOneEmail_templatesArgs;
