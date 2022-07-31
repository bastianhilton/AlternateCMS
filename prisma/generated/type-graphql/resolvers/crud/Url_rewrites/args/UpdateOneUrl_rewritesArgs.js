"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateOneUrl_rewritesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Url_rewritesUpdateInput_1 = require("../../../inputs/Url_rewritesUpdateInput");
const Url_rewritesWhereUniqueInput_1 = require("../../../inputs/Url_rewritesWhereUniqueInput");
let UpdateOneUrl_rewritesArgs = class UpdateOneUrl_rewritesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Url_rewritesUpdateInput_1.Url_rewritesUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Url_rewritesUpdateInput_1.Url_rewritesUpdateInput)
], UpdateOneUrl_rewritesArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Url_rewritesWhereUniqueInput_1.Url_rewritesWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Url_rewritesWhereUniqueInput_1.Url_rewritesWhereUniqueInput)
], UpdateOneUrl_rewritesArgs.prototype, "where", void 0);
UpdateOneUrl_rewritesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateOneUrl_rewritesArgs);
exports.UpdateOneUrl_rewritesArgs = UpdateOneUrl_rewritesArgs;
