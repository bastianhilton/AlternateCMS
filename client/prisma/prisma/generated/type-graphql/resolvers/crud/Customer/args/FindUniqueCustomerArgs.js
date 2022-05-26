"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueCustomerArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CustomerWhereUniqueInput_1 = require("../../../inputs/CustomerWhereUniqueInput");
let FindUniqueCustomerArgs = class FindUniqueCustomerArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CustomerWhereUniqueInput_1.CustomerWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CustomerWhereUniqueInput_1.CustomerWhereUniqueInput)
], FindUniqueCustomerArgs.prototype, "where", void 0);
FindUniqueCustomerArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindUniqueCustomerArgs);
exports.FindUniqueCustomerArgs = FindUniqueCustomerArgs;
