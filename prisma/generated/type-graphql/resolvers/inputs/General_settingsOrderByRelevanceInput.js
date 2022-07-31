"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.General_settingsOrderByRelevanceInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const General_settingsOrderByRelevanceFieldEnum_1 = require("../../enums/General_settingsOrderByRelevanceFieldEnum");
const SortOrder_1 = require("../../enums/SortOrder");
let General_settingsOrderByRelevanceInput = class General_settingsOrderByRelevanceInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [General_settingsOrderByRelevanceFieldEnum_1.General_settingsOrderByRelevanceFieldEnum], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], General_settingsOrderByRelevanceInput.prototype, "fields", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], General_settingsOrderByRelevanceInput.prototype, "sort", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], General_settingsOrderByRelevanceInput.prototype, "search", void 0);
General_settingsOrderByRelevanceInput = tslib_1.__decorate([
    TypeGraphQL.InputType("General_settingsOrderByRelevanceInput", {
        isAbstract: true
    })
], General_settingsOrderByRelevanceInput);
exports.General_settingsOrderByRelevanceInput = General_settingsOrderByRelevanceInput;
