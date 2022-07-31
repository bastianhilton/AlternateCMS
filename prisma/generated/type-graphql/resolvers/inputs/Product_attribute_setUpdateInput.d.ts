import { IntFieldUpdateOperationsInput } from "../inputs/IntFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
export declare class Product_attribute_setUpdateInput {
    name?: StringFieldUpdateOperationsInput | undefined;
    based_on?: NullableStringFieldUpdateOperationsInput | undefined;
    attribute_id?: IntFieldUpdateOperationsInput | undefined;
    product_attribute?: NullableStringFieldUpdateOperationsInput | undefined;
}
