import { BigIntFieldUpdateOperationsInput } from "../inputs/BigIntFieldUpdateOperationsInput";
import { NullableBigIntFieldUpdateOperationsInput } from "../inputs/NullableBigIntFieldUpdateOperationsInput";
import { NullableDateTimeFieldUpdateOperationsInput } from "../inputs/NullableDateTimeFieldUpdateOperationsInput";
import { NullableIntFieldUpdateOperationsInput } from "../inputs/NullableIntFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
export declare class TrainingsUpdateManyMutationInput {
    id?: BigIntFieldUpdateOperationsInput | undefined;
    created_at?: NullableDateTimeFieldUpdateOperationsInput | undefined;
    name?: NullableStringFieldUpdateOperationsInput | undefined;
    subject?: NullableStringFieldUpdateOperationsInput | undefined;
    content?: NullableStringFieldUpdateOperationsInput | undefined;
    media?: NullableStringFieldUpdateOperationsInput | undefined;
    link?: NullableStringFieldUpdateOperationsInput | undefined;
    steps?: NullableStringFieldUpdateOperationsInput | undefined;
    updated?: NullableDateTimeFieldUpdateOperationsInput | undefined;
    analytics?: NullableStringFieldUpdateOperationsInput | undefined;
    competency?: NullableStringFieldUpdateOperationsInput | undefined;
    course?: NullableStringFieldUpdateOperationsInput | undefined;
    grade?: NullableStringFieldUpdateOperationsInput | undefined;
    school?: NullableStringFieldUpdateOperationsInput | undefined;
    comment?: NullableIntFieldUpdateOperationsInput | undefined;
    address?: NullableStringFieldUpdateOperationsInput | undefined;
    country?: NullableIntFieldUpdateOperationsInput | undefined;
    state?: NullableIntFieldUpdateOperationsInput | undefined;
    postal?: NullableStringFieldUpdateOperationsInput | undefined;
    teacher?: NullableStringFieldUpdateOperationsInput | undefined;
    student?: NullableStringFieldUpdateOperationsInput | undefined;
    anncouncement?: NullableStringFieldUpdateOperationsInput | undefined;
    resource?: NullableStringFieldUpdateOperationsInput | undefined;
    badges?: NullableStringFieldUpdateOperationsInput | undefined;
    isPublic?: NullableStringFieldUpdateOperationsInput | undefined;
    isCompleted?: NullableStringFieldUpdateOperationsInput | undefined;
    speakers?: NullableStringFieldUpdateOperationsInput | undefined;
    fieldTrips?: NullableStringFieldUpdateOperationsInput | undefined;
    assignments?: NullableStringFieldUpdateOperationsInput | undefined;
    assignmentsDueDate?: NullableStringFieldUpdateOperationsInput | undefined;
    origanlityReport?: NullableStringFieldUpdateOperationsInput | undefined;
    products?: NullableBigIntFieldUpdateOperationsInput | undefined;
    faqs?: NullableStringFieldUpdateOperationsInput | undefined;
    languages?: NullableStringFieldUpdateOperationsInput | undefined;
    checklists?: NullableBigIntFieldUpdateOperationsInput | undefined;
    city?: NullableStringFieldUpdateOperationsInput | undefined;
    meetups?: NullableStringFieldUpdateOperationsInput | undefined;
    lab?: NullableStringFieldUpdateOperationsInput | undefined;
    digiboards?: NullableStringFieldUpdateOperationsInput | undefined;
    checklist?: NullableStringFieldUpdateOperationsInput | undefined;
    comments?: NullableStringFieldUpdateOperationsInput | undefined;
    countries?: NullableStringFieldUpdateOperationsInput | undefined;
    products_productsTotrainings?: NullableStringFieldUpdateOperationsInput | undefined;
    states?: NullableStringFieldUpdateOperationsInput | undefined;
}
