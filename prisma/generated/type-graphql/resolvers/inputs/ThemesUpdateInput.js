"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ThemesUpdateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const NullableStringFieldUpdateOperationsInput_1 = require("../inputs/NullableStringFieldUpdateOperationsInput");
const WebsitesUpdateOneRequiredWithoutThemesNestedInput_1 = require("../inputs/WebsitesUpdateOneRequiredWithoutThemesNestedInput");
let ThemesUpdateInput = class ThemesUpdateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], ThemesUpdateInput.prototype, "title", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], ThemesUpdateInput.prototype, "parent_theme", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], ThemesUpdateInput.prototype, "theme_path", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], ThemesUpdateInput.prototype, "action", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => WebsitesUpdateOneRequiredWithoutThemesNestedInput_1.WebsitesUpdateOneRequiredWithoutThemesNestedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", WebsitesUpdateOneRequiredWithoutThemesNestedInput_1.WebsitesUpdateOneRequiredWithoutThemesNestedInput)
], ThemesUpdateInput.prototype, "websites", void 0);
ThemesUpdateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ThemesUpdateInput", {
        isAbstract: true
    })
], ThemesUpdateInput);
exports.ThemesUpdateInput = ThemesUpdateInput;
