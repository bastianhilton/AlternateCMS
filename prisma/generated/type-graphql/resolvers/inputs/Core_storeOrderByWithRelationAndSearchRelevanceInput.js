"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Core_storeOrderByWithRelationAndSearchRelevanceInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Core_storeOrderByRelevanceInput_1 = require("../inputs/Core_storeOrderByRelevanceInput");
const SortOrder_1 = require("../../enums/SortOrder");
let Core_storeOrderByWithRelationAndSearchRelevanceInput = class Core_storeOrderByWithRelationAndSearchRelevanceInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Core_storeOrderByWithRelationAndSearchRelevanceInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Core_storeOrderByWithRelationAndSearchRelevanceInput.prototype, "key", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Core_storeOrderByWithRelationAndSearchRelevanceInput.prototype, "value", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Core_storeOrderByWithRelationAndSearchRelevanceInput.prototype, "type", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Core_storeOrderByWithRelationAndSearchRelevanceInput.prototype, "environment", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Core_storeOrderByWithRelationAndSearchRelevanceInput.prototype, "tag", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Core_storeOrderByRelevanceInput_1.Core_storeOrderByRelevanceInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Core_storeOrderByRelevanceInput_1.Core_storeOrderByRelevanceInput)
], Core_storeOrderByWithRelationAndSearchRelevanceInput.prototype, "_relevance", void 0);
Core_storeOrderByWithRelationAndSearchRelevanceInput = tslib_1.__decorate([
    TypeGraphQL.InputType("Core_storeOrderByWithRelationAndSearchRelevanceInput", {
        isAbstract: true
    })
], Core_storeOrderByWithRelationAndSearchRelevanceInput);
exports.Core_storeOrderByWithRelationAndSearchRelevanceInput = Core_storeOrderByWithRelationAndSearchRelevanceInput;
