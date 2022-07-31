"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteOneUrl_rewritesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Url_rewritesWhereUniqueInput_1 = require("../../../inputs/Url_rewritesWhereUniqueInput");
let DeleteOneUrl_rewritesArgs = class DeleteOneUrl_rewritesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Url_rewritesWhereUniqueInput_1.Url_rewritesWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Url_rewritesWhereUniqueInput_1.Url_rewritesWhereUniqueInput)
], DeleteOneUrl_rewritesArgs.prototype, "where", void 0);
DeleteOneUrl_rewritesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteOneUrl_rewritesArgs);
exports.DeleteOneUrl_rewritesArgs = DeleteOneUrl_rewritesArgs;
