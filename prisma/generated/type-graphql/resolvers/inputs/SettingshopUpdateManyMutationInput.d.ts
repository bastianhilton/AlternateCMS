import { BigIntFieldUpdateOperationsInput } from "../inputs/BigIntFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
export declare class SettingshopUpdateManyMutationInput {
    id?: BigIntFieldUpdateOperationsInput | undefined;
    enable_product_assignment?: NullableStringFieldUpdateOperationsInput | undefined;
    product_videos?: NullableStringFieldUpdateOperationsInput | undefined;
    seller_payouts?: NullableStringFieldUpdateOperationsInput | undefined;
    admin_approval?: NullableStringFieldUpdateOperationsInput | undefined;
    enable_review_system?: NullableStringFieldUpdateOperationsInput | undefined;
    customer_rate_vendor?: NullableStringFieldUpdateOperationsInput | undefined;
    multishipping?: NullableStringFieldUpdateOperationsInput | undefined;
    vendor_transaction_id?: NullableStringFieldUpdateOperationsInput | undefined;
    enable_vendor_product_attribute?: NullableStringFieldUpdateOperationsInput | undefined;
}
