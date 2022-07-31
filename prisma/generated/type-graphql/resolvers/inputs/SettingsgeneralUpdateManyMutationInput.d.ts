import { BigIntFieldUpdateOperationsInput } from "../inputs/BigIntFieldUpdateOperationsInput";
import { NullableDateTimeFieldUpdateOperationsInput } from "../inputs/NullableDateTimeFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
export declare class SettingsgeneralUpdateManyMutationInput {
    id?: BigIntFieldUpdateOperationsInput | undefined;
    created_at?: NullableDateTimeFieldUpdateOperationsInput | undefined;
    site_title?: NullableStringFieldUpdateOperationsInput | undefined;
    site_tagline?: NullableStringFieldUpdateOperationsInput | undefined;
    site_website?: NullableStringFieldUpdateOperationsInput | undefined;
    email?: NullableStringFieldUpdateOperationsInput | undefined;
    aws_s3?: NullableStringFieldUpdateOperationsInput | undefined;
    google_drive?: NullableStringFieldUpdateOperationsInput | undefined;
}
