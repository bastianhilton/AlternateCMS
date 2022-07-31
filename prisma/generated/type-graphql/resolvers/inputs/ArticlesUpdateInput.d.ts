import { IntFieldUpdateOperationsInput } from "../inputs/IntFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
export declare class ArticlesUpdateInput {
    name?: StringFieldUpdateOperationsInput | undefined;
    excerpt?: StringFieldUpdateOperationsInput | undefined;
    content?: NullableStringFieldUpdateOperationsInput | undefined;
    image?: NullableStringFieldUpdateOperationsInput | undefined;
    categories?: NullableStringFieldUpdateOperationsInput | undefined;
    customers?: NullableStringFieldUpdateOperationsInput | undefined;
    users?: NullableStringFieldUpdateOperationsInput | undefined;
    published?: NullableStringFieldUpdateOperationsInput | undefined;
    cust_id?: IntFieldUpdateOperationsInput | undefined;
    isPublic?: NullableStringFieldUpdateOperationsInput | undefined;
    meta_description?: NullableStringFieldUpdateOperationsInput | undefined;
    meta_name?: NullableStringFieldUpdateOperationsInput | undefined;
    meta_url?: NullableStringFieldUpdateOperationsInput | undefined;
    tags?: NullableStringFieldUpdateOperationsInput | undefined;
}
