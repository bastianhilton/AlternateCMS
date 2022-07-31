import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { WebsitesUpdateOneRequiredWithoutThemesNestedInput } from "../inputs/WebsitesUpdateOneRequiredWithoutThemesNestedInput";
export declare class ThemesUpdateInput {
    title?: NullableStringFieldUpdateOperationsInput | undefined;
    parent_theme?: NullableStringFieldUpdateOperationsInput | undefined;
    theme_path?: NullableStringFieldUpdateOperationsInput | undefined;
    action?: NullableStringFieldUpdateOperationsInput | undefined;
    websites?: WebsitesUpdateOneRequiredWithoutThemesNestedInput | undefined;
}
