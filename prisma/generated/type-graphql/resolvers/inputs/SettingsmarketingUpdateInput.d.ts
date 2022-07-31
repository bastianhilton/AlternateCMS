import { BigIntFieldUpdateOperationsInput } from "../inputs/BigIntFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
export declare class SettingsmarketingUpdateInput {
    id?: BigIntFieldUpdateOperationsInput | undefined;
    mail_port?: NullableStringFieldUpdateOperationsInput | undefined;
    recaptcha_api?: NullableStringFieldUpdateOperationsInput | undefined;
    adsense_api?: NullableStringFieldUpdateOperationsInput | undefined;
    sitemap_url?: NullableStringFieldUpdateOperationsInput | undefined;
    customer_data_lifetime?: NullableStringFieldUpdateOperationsInput | undefined;
    mail_server?: NullableStringFieldUpdateOperationsInput | undefined;
}
