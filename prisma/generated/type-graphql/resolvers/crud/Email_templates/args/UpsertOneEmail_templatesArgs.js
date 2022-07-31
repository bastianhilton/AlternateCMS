"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertOneEmail_templatesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Email_templatesCreateInput_1 = require("../../../inputs/Email_templatesCreateInput");
const Email_templatesUpdateInput_1 = require("../../../inputs/Email_templatesUpdateInput");
const Email_templatesWhereUniqueInput_1 = require("../../../inputs/Email_templatesWhereUniqueInput");
let UpsertOneEmail_templatesArgs = class UpsertOneEmail_templatesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Email_templatesWhereUniqueInput_1.Email_templatesWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Email_templatesWhereUniqueInput_1.Email_templatesWhereUniqueInput)
], UpsertOneEmail_templatesArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Email_templatesCreateInput_1.Email_templatesCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Email_templatesCreateInput_1.Email_templatesCreateInput)
], UpsertOneEmail_templatesArgs.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Email_templatesUpdateInput_1.Email_templatesUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Email_templatesUpdateInput_1.Email_templatesUpdateInput)
], UpsertOneEmail_templatesArgs.prototype, "update", void 0);
UpsertOneEmail_templatesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpsertOneEmail_templatesArgs);
exports.UpsertOneEmail_templatesArgs = UpsertOneEmail_templatesArgs;
