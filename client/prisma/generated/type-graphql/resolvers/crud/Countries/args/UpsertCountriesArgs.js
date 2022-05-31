"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertCountriesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CountriesCreateInput_1 = require("../../../inputs/CountriesCreateInput");
const CountriesUpdateInput_1 = require("../../../inputs/CountriesUpdateInput");
const CountriesWhereUniqueInput_1 = require("../../../inputs/CountriesWhereUniqueInput");
let UpsertCountriesArgs = class UpsertCountriesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CountriesWhereUniqueInput_1.CountriesWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CountriesWhereUniqueInput_1.CountriesWhereUniqueInput)
], UpsertCountriesArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CountriesCreateInput_1.CountriesCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CountriesCreateInput_1.CountriesCreateInput)
], UpsertCountriesArgs.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CountriesUpdateInput_1.CountriesUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CountriesUpdateInput_1.CountriesUpdateInput)
], UpsertCountriesArgs.prototype, "update", void 0);
UpsertCountriesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpsertCountriesArgs);
exports.UpsertCountriesArgs = UpsertCountriesArgs;
