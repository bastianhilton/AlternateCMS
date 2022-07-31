"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ThemesUpdateManyWithoutWebsitesNestedInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ThemesCreateManyWebsitesInputEnvelope_1 = require("../inputs/ThemesCreateManyWebsitesInputEnvelope");
const ThemesCreateOrConnectWithoutWebsitesInput_1 = require("../inputs/ThemesCreateOrConnectWithoutWebsitesInput");
const ThemesCreateWithoutWebsitesInput_1 = require("../inputs/ThemesCreateWithoutWebsitesInput");
const ThemesScalarWhereInput_1 = require("../inputs/ThemesScalarWhereInput");
const ThemesUpdateManyWithWhereWithoutWebsitesInput_1 = require("../inputs/ThemesUpdateManyWithWhereWithoutWebsitesInput");
const ThemesUpdateWithWhereUniqueWithoutWebsitesInput_1 = require("../inputs/ThemesUpdateWithWhereUniqueWithoutWebsitesInput");
const ThemesUpsertWithWhereUniqueWithoutWebsitesInput_1 = require("../inputs/ThemesUpsertWithWhereUniqueWithoutWebsitesInput");
const ThemesWhereUniqueInput_1 = require("../inputs/ThemesWhereUniqueInput");
let ThemesUpdateManyWithoutWebsitesNestedInput = class ThemesUpdateManyWithoutWebsitesNestedInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ThemesCreateWithoutWebsitesInput_1.ThemesCreateWithoutWebsitesInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ThemesUpdateManyWithoutWebsitesNestedInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ThemesCreateOrConnectWithoutWebsitesInput_1.ThemesCreateOrConnectWithoutWebsitesInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ThemesUpdateManyWithoutWebsitesNestedInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ThemesUpsertWithWhereUniqueWithoutWebsitesInput_1.ThemesUpsertWithWhereUniqueWithoutWebsitesInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ThemesUpdateManyWithoutWebsitesNestedInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ThemesCreateManyWebsitesInputEnvelope_1.ThemesCreateManyWebsitesInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ThemesCreateManyWebsitesInputEnvelope_1.ThemesCreateManyWebsitesInputEnvelope)
], ThemesUpdateManyWithoutWebsitesNestedInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ThemesWhereUniqueInput_1.ThemesWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ThemesUpdateManyWithoutWebsitesNestedInput.prototype, "set", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ThemesWhereUniqueInput_1.ThemesWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ThemesUpdateManyWithoutWebsitesNestedInput.prototype, "disconnect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ThemesWhereUniqueInput_1.ThemesWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ThemesUpdateManyWithoutWebsitesNestedInput.prototype, "delete", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ThemesWhereUniqueInput_1.ThemesWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ThemesUpdateManyWithoutWebsitesNestedInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ThemesUpdateWithWhereUniqueWithoutWebsitesInput_1.ThemesUpdateWithWhereUniqueWithoutWebsitesInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ThemesUpdateManyWithoutWebsitesNestedInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ThemesUpdateManyWithWhereWithoutWebsitesInput_1.ThemesUpdateManyWithWhereWithoutWebsitesInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ThemesUpdateManyWithoutWebsitesNestedInput.prototype, "updateMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ThemesScalarWhereInput_1.ThemesScalarWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ThemesUpdateManyWithoutWebsitesNestedInput.prototype, "deleteMany", void 0);
ThemesUpdateManyWithoutWebsitesNestedInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ThemesUpdateManyWithoutWebsitesNestedInput", {
        isAbstract: true
    })
], ThemesUpdateManyWithoutWebsitesNestedInput);
exports.ThemesUpdateManyWithoutWebsitesNestedInput = ThemesUpdateManyWithoutWebsitesNestedInput;
