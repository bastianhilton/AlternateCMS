"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pdf_templatesOrderByRelevanceInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Pdf_templatesOrderByRelevanceFieldEnum_1 = require("../../enums/Pdf_templatesOrderByRelevanceFieldEnum");
const SortOrder_1 = require("../../enums/SortOrder");
let Pdf_templatesOrderByRelevanceInput = class Pdf_templatesOrderByRelevanceInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Pdf_templatesOrderByRelevanceFieldEnum_1.Pdf_templatesOrderByRelevanceFieldEnum], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], Pdf_templatesOrderByRelevanceInput.prototype, "fields", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], Pdf_templatesOrderByRelevanceInput.prototype, "sort", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], Pdf_templatesOrderByRelevanceInput.prototype, "search", void 0);
Pdf_templatesOrderByRelevanceInput = tslib_1.__decorate([
    TypeGraphQL.InputType("Pdf_templatesOrderByRelevanceInput", {
        isAbstract: true
    })
], Pdf_templatesOrderByRelevanceInput);
exports.Pdf_templatesOrderByRelevanceInput = Pdf_templatesOrderByRelevanceInput;
