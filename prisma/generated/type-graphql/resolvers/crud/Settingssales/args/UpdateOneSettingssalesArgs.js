"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateOneSettingssalesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SettingssalesUpdateInput_1 = require("../../../inputs/SettingssalesUpdateInput");
const SettingssalesWhereUniqueInput_1 = require("../../../inputs/SettingssalesWhereUniqueInput");
let UpdateOneSettingssalesArgs = class UpdateOneSettingssalesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SettingssalesUpdateInput_1.SettingssalesUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", SettingssalesUpdateInput_1.SettingssalesUpdateInput)
], UpdateOneSettingssalesArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SettingssalesWhereUniqueInput_1.SettingssalesWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", SettingssalesWhereUniqueInput_1.SettingssalesWhereUniqueInput)
], UpdateOneSettingssalesArgs.prototype, "where", void 0);
UpdateOneSettingssalesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateOneSettingssalesArgs);
exports.UpdateOneSettingssalesArgs = UpdateOneSettingssalesArgs;
