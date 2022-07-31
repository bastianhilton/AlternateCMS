"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Core_storeOrderByRelevanceInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Core_storeOrderByRelevanceFieldEnum_1 = require("../../enums/Core_storeOrderByRelevanceFieldEnum");
const SortOrder_1 = require("../../enums/SortOrder");
let Core_storeOrderByRelevanceInput = class Core_storeOrderByRelevanceInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Core_storeOrderByRelevanceFieldEnum_1.Core_storeOrderByRelevanceFieldEnum], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], Core_storeOrderByRelevanceInput.prototype, "fields", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], Core_storeOrderByRelevanceInput.prototype, "sort", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], Core_storeOrderByRelevanceInput.prototype, "search", void 0);
Core_storeOrderByRelevanceInput = tslib_1.__decorate([
    TypeGraphQL.InputType("Core_storeOrderByRelevanceInput", {
        isAbstract: true
    })
], Core_storeOrderByRelevanceInput);
exports.Core_storeOrderByRelevanceInput = Core_storeOrderByRelevanceInput;
