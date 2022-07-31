"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateOneNewsletter_subscribersArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Newsletter_subscribersCreateInput_1 = require("../../../inputs/Newsletter_subscribersCreateInput");
let CreateOneNewsletter_subscribersArgs = class CreateOneNewsletter_subscribersArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Newsletter_subscribersCreateInput_1.Newsletter_subscribersCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Newsletter_subscribersCreateInput_1.Newsletter_subscribersCreateInput)
], CreateOneNewsletter_subscribersArgs.prototype, "data", void 0);
CreateOneNewsletter_subscribersArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateOneNewsletter_subscribersArgs);
exports.CreateOneNewsletter_subscribersArgs = CreateOneNewsletter_subscribersArgs;
