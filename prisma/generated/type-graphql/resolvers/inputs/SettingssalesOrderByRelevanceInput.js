"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SettingssalesOrderByRelevanceInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SettingssalesOrderByRelevanceFieldEnum_1 = require("../../enums/SettingssalesOrderByRelevanceFieldEnum");
const SortOrder_1 = require("../../enums/SortOrder");
let SettingssalesOrderByRelevanceInput = class SettingssalesOrderByRelevanceInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [SettingssalesOrderByRelevanceFieldEnum_1.SettingssalesOrderByRelevanceFieldEnum], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], SettingssalesOrderByRelevanceInput.prototype, "fields", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], SettingssalesOrderByRelevanceInput.prototype, "sort", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], SettingssalesOrderByRelevanceInput.prototype, "search", void 0);
SettingssalesOrderByRelevanceInput = tslib_1.__decorate([
    TypeGraphQL.InputType("SettingssalesOrderByRelevanceInput", {
        isAbstract: true
    })
], SettingssalesOrderByRelevanceInput);
exports.SettingssalesOrderByRelevanceInput = SettingssalesOrderByRelevanceInput;
