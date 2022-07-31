"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertOneCore_storeArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Core_storeCreateInput_1 = require("../../../inputs/Core_storeCreateInput");
const Core_storeUpdateInput_1 = require("../../../inputs/Core_storeUpdateInput");
const Core_storeWhereUniqueInput_1 = require("../../../inputs/Core_storeWhereUniqueInput");
let UpsertOneCore_storeArgs = class UpsertOneCore_storeArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Core_storeWhereUniqueInput_1.Core_storeWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Core_storeWhereUniqueInput_1.Core_storeWhereUniqueInput)
], UpsertOneCore_storeArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Core_storeCreateInput_1.Core_storeCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Core_storeCreateInput_1.Core_storeCreateInput)
], UpsertOneCore_storeArgs.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Core_storeUpdateInput_1.Core_storeUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Core_storeUpdateInput_1.Core_storeUpdateInput)
], UpsertOneCore_storeArgs.prototype, "update", void 0);
UpsertOneCore_storeArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpsertOneCore_storeArgs);
exports.UpsertOneCore_storeArgs = UpsertOneCore_storeArgs;
