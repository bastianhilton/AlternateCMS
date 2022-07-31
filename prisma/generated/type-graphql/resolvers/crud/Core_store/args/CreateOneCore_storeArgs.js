"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateOneCore_storeArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Core_storeCreateInput_1 = require("../../../inputs/Core_storeCreateInput");
let CreateOneCore_storeArgs = class CreateOneCore_storeArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Core_storeCreateInput_1.Core_storeCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Core_storeCreateInput_1.Core_storeCreateInput)
], CreateOneCore_storeArgs.prototype, "data", void 0);
CreateOneCore_storeArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateOneCore_storeArgs);
exports.CreateOneCore_storeArgs = CreateOneCore_storeArgs;
