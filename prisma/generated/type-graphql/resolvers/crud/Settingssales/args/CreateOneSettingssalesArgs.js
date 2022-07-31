"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateOneSettingssalesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SettingssalesCreateInput_1 = require("../../../inputs/SettingssalesCreateInput");
let CreateOneSettingssalesArgs = class CreateOneSettingssalesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SettingssalesCreateInput_1.SettingssalesCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", SettingssalesCreateInput_1.SettingssalesCreateInput)
], CreateOneSettingssalesArgs.prototype, "data", void 0);
CreateOneSettingssalesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateOneSettingssalesArgs);
exports.CreateOneSettingssalesArgs = CreateOneSettingssalesArgs;
