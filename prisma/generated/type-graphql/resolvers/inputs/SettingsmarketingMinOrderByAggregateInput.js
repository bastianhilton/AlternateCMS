"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SettingsmarketingMinOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let SettingsmarketingMinOrderByAggregateInput = class SettingsmarketingMinOrderByAggregateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SettingsmarketingMinOrderByAggregateInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SettingsmarketingMinOrderByAggregateInput.prototype, "mail_port", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SettingsmarketingMinOrderByAggregateInput.prototype, "recaptcha_api", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SettingsmarketingMinOrderByAggregateInput.prototype, "adsense_api", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SettingsmarketingMinOrderByAggregateInput.prototype, "sitemap_url", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SettingsmarketingMinOrderByAggregateInput.prototype, "customer_data_lifetime", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SettingsmarketingMinOrderByAggregateInput.prototype, "mail_server", void 0);
SettingsmarketingMinOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("SettingsmarketingMinOrderByAggregateInput", {
        isAbstract: true
    })
], SettingsmarketingMinOrderByAggregateInput);
exports.SettingsmarketingMinOrderByAggregateInput = SettingsmarketingMinOrderByAggregateInput;
