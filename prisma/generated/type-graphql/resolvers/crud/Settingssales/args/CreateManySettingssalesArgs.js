"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManySettingssalesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SettingssalesCreateManyInput_1 = require("../../../inputs/SettingssalesCreateManyInput");
let CreateManySettingssalesArgs = class CreateManySettingssalesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [SettingssalesCreateManyInput_1.SettingssalesCreateManyInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], CreateManySettingssalesArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], CreateManySettingssalesArgs.prototype, "skipDuplicates", void 0);
CreateManySettingssalesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateManySettingssalesArgs);
exports.CreateManySettingssalesArgs = CreateManySettingssalesArgs;
