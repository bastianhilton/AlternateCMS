"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SettingsmarketingCountOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let SettingsmarketingCountOrderByAggregateInput = class SettingsmarketingCountOrderByAggregateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SettingsmarketingCountOrderByAggregateInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SettingsmarketingCountOrderByAggregateInput.prototype, "mail_port", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SettingsmarketingCountOrderByAggregateInput.prototype, "recaptcha_api", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SettingsmarketingCountOrderByAggregateInput.prototype, "adsense_api", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SettingsmarketingCountOrderByAggregateInput.prototype, "sitemap_url", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SettingsmarketingCountOrderByAggregateInput.prototype, "customer_data_lifetime", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SettingsmarketingCountOrderByAggregateInput.prototype, "mail_server", void 0);
SettingsmarketingCountOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("SettingsmarketingCountOrderByAggregateInput", {
        isAbstract: true
    })
], SettingsmarketingCountOrderByAggregateInput);
exports.SettingsmarketingCountOrderByAggregateInput = SettingsmarketingCountOrderByAggregateInput;
