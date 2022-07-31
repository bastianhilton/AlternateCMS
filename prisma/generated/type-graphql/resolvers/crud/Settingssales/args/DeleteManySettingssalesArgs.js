"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteManySettingssalesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SettingssalesWhereInput_1 = require("../../../inputs/SettingssalesWhereInput");
let DeleteManySettingssalesArgs = class DeleteManySettingssalesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SettingssalesWhereInput_1.SettingssalesWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SettingssalesWhereInput_1.SettingssalesWhereInput)
], DeleteManySettingssalesArgs.prototype, "where", void 0);
DeleteManySettingssalesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteManySettingssalesArgs);
exports.DeleteManySettingssalesArgs = DeleteManySettingssalesArgs;
