"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManySettingssalesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SettingssalesUpdateManyMutationInput_1 = require("../../../inputs/SettingssalesUpdateManyMutationInput");
const SettingssalesWhereInput_1 = require("../../../inputs/SettingssalesWhereInput");
let UpdateManySettingssalesArgs = class UpdateManySettingssalesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SettingssalesUpdateManyMutationInput_1.SettingssalesUpdateManyMutationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", SettingssalesUpdateManyMutationInput_1.SettingssalesUpdateManyMutationInput)
], UpdateManySettingssalesArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SettingssalesWhereInput_1.SettingssalesWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SettingssalesWhereInput_1.SettingssalesWhereInput)
], UpdateManySettingssalesArgs.prototype, "where", void 0);
UpdateManySettingssalesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateManySettingssalesArgs);
exports.UpdateManySettingssalesArgs = UpdateManySettingssalesArgs;
