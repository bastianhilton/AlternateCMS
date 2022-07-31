"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Email_templatesOrderByRelevanceInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Email_templatesOrderByRelevanceFieldEnum_1 = require("../../enums/Email_templatesOrderByRelevanceFieldEnum");
const SortOrder_1 = require("../../enums/SortOrder");
let Email_templatesOrderByRelevanceInput = class Email_templatesOrderByRelevanceInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Email_templatesOrderByRelevanceFieldEnum_1.Email_templatesOrderByRelevanceFieldEnum], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], Email_templatesOrderByRelevanceInput.prototype, "fields", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], Email_templatesOrderByRelevanceInput.prototype, "sort", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], Email_templatesOrderByRelevanceInput.prototype, "search", void 0);
Email_templatesOrderByRelevanceInput = tslib_1.__decorate([
    TypeGraphQL.InputType("Email_templatesOrderByRelevanceInput", {
        isAbstract: true
    })
], Email_templatesOrderByRelevanceInput);
exports.Email_templatesOrderByRelevanceInput = Email_templatesOrderByRelevanceInput;
