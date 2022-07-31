"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertOneNewsletter_subscribersArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Newsletter_subscribersCreateInput_1 = require("../../../inputs/Newsletter_subscribersCreateInput");
const Newsletter_subscribersUpdateInput_1 = require("../../../inputs/Newsletter_subscribersUpdateInput");
const Newsletter_subscribersWhereUniqueInput_1 = require("../../../inputs/Newsletter_subscribersWhereUniqueInput");
let UpsertOneNewsletter_subscribersArgs = class UpsertOneNewsletter_subscribersArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Newsletter_subscribersWhereUniqueInput_1.Newsletter_subscribersWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Newsletter_subscribersWhereUniqueInput_1.Newsletter_subscribersWhereUniqueInput)
], UpsertOneNewsletter_subscribersArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Newsletter_subscribersCreateInput_1.Newsletter_subscribersCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Newsletter_subscribersCreateInput_1.Newsletter_subscribersCreateInput)
], UpsertOneNewsletter_subscribersArgs.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Newsletter_subscribersUpdateInput_1.Newsletter_subscribersUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Newsletter_subscribersUpdateInput_1.Newsletter_subscribersUpdateInput)
], UpsertOneNewsletter_subscribersArgs.prototype, "update", void 0);
UpsertOneNewsletter_subscribersArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpsertOneNewsletter_subscribersArgs);
exports.UpsertOneNewsletter_subscribersArgs = UpsertOneNewsletter_subscribersArgs;
