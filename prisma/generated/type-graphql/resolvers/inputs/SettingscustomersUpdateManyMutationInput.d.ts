import { BigIntFieldUpdateOperationsInput } from "../inputs/BigIntFieldUpdateOperationsInput";
import { NullableDateTimeFieldUpdateOperationsInput } from "../inputs/NullableDateTimeFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
export declare class SettingscustomersUpdateManyMutationInput {
    id?: BigIntFieldUpdateOperationsInput | undefined;
    created_at?: NullableDateTimeFieldUpdateOperationsInput | undefined;
    login_as_customer?: NullableStringFieldUpdateOperationsInput | undefined;
    share_customer_accounts?: NullableStringFieldUpdateOperationsInput | undefined;
    online_minutes_interval?: NullableStringFieldUpdateOperationsInput | undefined;
    customer_data_lifetime?: NullableStringFieldUpdateOperationsInput | undefined;
    email_after_registration?: NullableStringFieldUpdateOperationsInput | undefined;
}
