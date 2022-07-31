import { BigIntFieldUpdateOperationsInput } from "../inputs/BigIntFieldUpdateOperationsInput";
import { NullableBigIntFieldUpdateOperationsInput } from "../inputs/NullableBigIntFieldUpdateOperationsInput";
import { NullableDateTimeFieldUpdateOperationsInput } from "../inputs/NullableDateTimeFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
export declare class OccassionsUpdateManyMutationInput {
    id?: BigIntFieldUpdateOperationsInput | undefined;
    created_at?: NullableDateTimeFieldUpdateOperationsInput | undefined;
    code?: NullableStringFieldUpdateOperationsInput | undefined;
    name?: NullableStringFieldUpdateOperationsInput | undefined;
    category?: NullableStringFieldUpdateOperationsInput | undefined;
    tags?: NullableStringFieldUpdateOperationsInput | undefined;
    description?: NullableStringFieldUpdateOperationsInput | undefined;
    products?: NullableBigIntFieldUpdateOperationsInput | undefined;
    wishlists?: NullableBigIntFieldUpdateOperationsInput | undefined;
    products_occassionsToproducts?: NullableStringFieldUpdateOperationsInput | undefined;
    wishlists_occassionsTowishlists?: NullableStringFieldUpdateOperationsInput | undefined;
}
