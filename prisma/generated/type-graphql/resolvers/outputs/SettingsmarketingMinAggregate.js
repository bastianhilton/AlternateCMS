"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SettingsmarketingMinAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const GraphQLScalars = tslib_1.__importStar(require("graphql-scalars"));
let SettingsmarketingMinAggregate = class SettingsmarketingMinAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", typeof BigInt === "function" ? BigInt : Object)
], SettingsmarketingMinAggregate.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SettingsmarketingMinAggregate.prototype, "mail_port", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SettingsmarketingMinAggregate.prototype, "recaptcha_api", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SettingsmarketingMinAggregate.prototype, "adsense_api", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SettingsmarketingMinAggregate.prototype, "sitemap_url", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SettingsmarketingMinAggregate.prototype, "customer_data_lifetime", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SettingsmarketingMinAggregate.prototype, "mail_server", void 0);
SettingsmarketingMinAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("SettingsmarketingMinAggregate", {
        isAbstract: true
    })
], SettingsmarketingMinAggregate);
exports.SettingsmarketingMinAggregate = SettingsmarketingMinAggregate;
