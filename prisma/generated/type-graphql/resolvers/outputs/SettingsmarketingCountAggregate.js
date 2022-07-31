"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SettingsmarketingCountAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let SettingsmarketingCountAggregate = class SettingsmarketingCountAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], SettingsmarketingCountAggregate.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], SettingsmarketingCountAggregate.prototype, "mail_port", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], SettingsmarketingCountAggregate.prototype, "recaptcha_api", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], SettingsmarketingCountAggregate.prototype, "adsense_api", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], SettingsmarketingCountAggregate.prototype, "sitemap_url", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], SettingsmarketingCountAggregate.prototype, "customer_data_lifetime", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], SettingsmarketingCountAggregate.prototype, "mail_server", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], SettingsmarketingCountAggregate.prototype, "_all", void 0);
SettingsmarketingCountAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("SettingsmarketingCountAggregate", {
        isAbstract: true
    })
], SettingsmarketingCountAggregate);
exports.SettingsmarketingCountAggregate = SettingsmarketingCountAggregate;
