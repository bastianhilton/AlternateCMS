"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateOneUrl_rewritesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Url_rewritesCreateInput_1 = require("../../../inputs/Url_rewritesCreateInput");
let CreateOneUrl_rewritesArgs = class CreateOneUrl_rewritesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Url_rewritesCreateInput_1.Url_rewritesCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Url_rewritesCreateInput_1.Url_rewritesCreateInput)
], CreateOneUrl_rewritesArgs.prototype, "data", void 0);
CreateOneUrl_rewritesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateOneUrl_rewritesArgs);
exports.CreateOneUrl_rewritesArgs = CreateOneUrl_rewritesArgs;
