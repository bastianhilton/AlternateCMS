"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertOneUrl_rewritesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Url_rewritesCreateInput_1 = require("../../../inputs/Url_rewritesCreateInput");
const Url_rewritesUpdateInput_1 = require("../../../inputs/Url_rewritesUpdateInput");
const Url_rewritesWhereUniqueInput_1 = require("../../../inputs/Url_rewritesWhereUniqueInput");
let UpsertOneUrl_rewritesArgs = class UpsertOneUrl_rewritesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Url_rewritesWhereUniqueInput_1.Url_rewritesWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Url_rewritesWhereUniqueInput_1.Url_rewritesWhereUniqueInput)
], UpsertOneUrl_rewritesArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Url_rewritesCreateInput_1.Url_rewritesCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Url_rewritesCreateInput_1.Url_rewritesCreateInput)
], UpsertOneUrl_rewritesArgs.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Url_rewritesUpdateInput_1.Url_rewritesUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Url_rewritesUpdateInput_1.Url_rewritesUpdateInput)
], UpsertOneUrl_rewritesArgs.prototype, "update", void 0);
UpsertOneUrl_rewritesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpsertOneUrl_rewritesArgs);
exports.UpsertOneUrl_rewritesArgs = UpsertOneUrl_rewritesArgs;
