import { NullableBigIntFieldUpdateOperationsInput } from "../inputs/NullableBigIntFieldUpdateOperationsInput";
import { NullableDateTimeFieldUpdateOperationsInput } from "../inputs/NullableDateTimeFieldUpdateOperationsInput";
import { NullableIntFieldUpdateOperationsInput } from "../inputs/NullableIntFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
export declare class MediamanagerUpdateManyMutationInput {
    created_at?: NullableDateTimeFieldUpdateOperationsInput | undefined;
    name?: NullableStringFieldUpdateOperationsInput | undefined;
    description?: NullableStringFieldUpdateOperationsInput | undefined;
    media?: NullableStringFieldUpdateOperationsInput | undefined;
    keywords?: NullableStringFieldUpdateOperationsInput | undefined;
    tags?: NullableStringFieldUpdateOperationsInput | undefined;
    brands?: NullableBigIntFieldUpdateOperationsInput | undefined;
    status?: NullableStringFieldUpdateOperationsInput | undefined;
    expiration_date?: NullableStringFieldUpdateOperationsInput | undefined;
    copyright?: NullableStringFieldUpdateOperationsInput | undefined;
    dimensions?: NullableStringFieldUpdateOperationsInput | undefined;
    author?: NullableIntFieldUpdateOperationsInput | undefined;
    content_type?: NullableStringFieldUpdateOperationsInput | undefined;
    versions?: NullableStringFieldUpdateOperationsInput | undefined;
    watermark_name?: NullableStringFieldUpdateOperationsInput | undefined;
    watermark_description?: NullableStringFieldUpdateOperationsInput | undefined;
    watermark_media?: NullableStringFieldUpdateOperationsInput | undefined;
    agreements?: NullableIntFieldUpdateOperationsInput | undefined;
    albums?: NullableStringFieldUpdateOperationsInput | undefined;
    comment?: NullableIntFieldUpdateOperationsInput | undefined;
    workspace?: NullableStringFieldUpdateOperationsInput | undefined;
    task_name?: NullableBigIntFieldUpdateOperationsInput | undefined;
    task_description?: NullableStringFieldUpdateOperationsInput | undefined;
    task_type?: NullableStringFieldUpdateOperationsInput | undefined;
    members?: NullableIntFieldUpdateOperationsInput | undefined;
    products?: NullableBigIntFieldUpdateOperationsInput | undefined;
    agreements_agreementsTomediamanager?: NullableStringFieldUpdateOperationsInput | undefined;
    brands_brandsTomediamanager?: NullableStringFieldUpdateOperationsInput | undefined;
    comments?: NullableStringFieldUpdateOperationsInput | undefined;
    customers?: NullableStringFieldUpdateOperationsInput | undefined;
    products_mediamanagerToproducts?: NullableStringFieldUpdateOperationsInput | undefined;
    tasks?: NullableStringFieldUpdateOperationsInput | undefined;
    users?: NullableStringFieldUpdateOperationsInput | undefined;
}