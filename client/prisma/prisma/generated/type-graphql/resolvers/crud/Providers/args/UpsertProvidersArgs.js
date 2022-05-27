"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertProvidersArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ProvidersCreateInput_1 = require("../../../inputs/ProvidersCreateInput");
const ProvidersUpdateInput_1 = require("../../../inputs/ProvidersUpdateInput");
const ProvidersWhereUniqueInput_1 = require("../../../inputs/ProvidersWhereUniqueInput");
let UpsertProvidersArgs = class UpsertProvidersArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProvidersWhereUniqueInput_1.ProvidersWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ProvidersWhereUniqueInput_1.ProvidersWhereUniqueInput)
], UpsertProvidersArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProvidersCreateInput_1.ProvidersCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ProvidersCreateInput_1.ProvidersCreateInput)
], UpsertProvidersArgs.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProvidersUpdateInput_1.ProvidersUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ProvidersUpdateInput_1.ProvidersUpdateInput)
], UpsertProvidersArgs.prototype, "update", void 0);
UpsertProvidersArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpsertProvidersArgs);
exports.UpsertProvidersArgs = UpsertProvidersArgs;