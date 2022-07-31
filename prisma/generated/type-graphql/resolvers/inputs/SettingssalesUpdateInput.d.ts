import { BigIntFieldUpdateOperationsInput } from "../inputs/BigIntFieldUpdateOperationsInput";
import { NullableDateTimeFieldUpdateOperationsInput } from "../inputs/NullableDateTimeFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
export declare class SettingssalesUpdateInput {
    id?: BigIntFieldUpdateOperationsInput | undefined;
    created_at?: NullableDateTimeFieldUpdateOperationsInput | undefined;
    analytics_account_type?: NullableStringFieldUpdateOperationsInput | undefined;
    analytics_account_number?: NullableStringFieldUpdateOperationsInput | undefined;
    analytics_anonymizeip?: NullableStringFieldUpdateOperationsInput | undefined;
    analytics_content_experiments?: NullableStringFieldUpdateOperationsInput | undefined;
    adwords_conversionid?: NullableStringFieldUpdateOperationsInput | undefined;
    adwords_conversionlanguage?: NullableStringFieldUpdateOperationsInput | undefined;
    adwords_conversionformat?: NullableStringFieldUpdateOperationsInput | undefined;
    adwords_conversioncolor?: NullableStringFieldUpdateOperationsInput | undefined;
    adwords_conversionlabel?: NullableStringFieldUpdateOperationsInput | undefined;
    adwords_conversionvalue_type?: NullableStringFieldUpdateOperationsInput | undefined;
    adwords_sendorder?: NullableStringFieldUpdateOperationsInput | undefined;
    tag_manager_anonymizeip?: NullableStringFieldUpdateOperationsInput | undefined;
    tag_manager_contentexperiments?: NullableStringFieldUpdateOperationsInput | undefined;
    tag_manager_containerid?: NullableStringFieldUpdateOperationsInput | undefined;
}
