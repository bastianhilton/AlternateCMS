"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteOneSettingssalesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SettingssalesWhereUniqueInput_1 = require("../../../inputs/SettingssalesWhereUniqueInput");
let DeleteOneSettingssalesArgs = class DeleteOneSettingssalesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SettingssalesWhereUniqueInput_1.SettingssalesWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", SettingssalesWhereUniqueInput_1.SettingssalesWhereUniqueInput)
], DeleteOneSettingssalesArgs.prototype, "where", void 0);
DeleteOneSettingssalesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteOneSettingssalesArgs);
exports.DeleteOneSettingssalesArgs = DeleteOneSettingssalesArgs;
