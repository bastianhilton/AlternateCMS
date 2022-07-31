import { NullableDateTimeFieldUpdateOperationsInput } from "../inputs/NullableDateTimeFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
export declare class CustomersUpdateManyMutationInput {
    thumbnail?: NullableStringFieldUpdateOperationsInput | undefined;
    name_prefix?: NullableStringFieldUpdateOperationsInput | undefined;
    first_name?: StringFieldUpdateOperationsInput | undefined;
    middle_name?: NullableStringFieldUpdateOperationsInput | undefined;
    last_name?: StringFieldUpdateOperationsInput | undefined;
    email?: StringFieldUpdateOperationsInput | undefined;
    customer_group?: NullableStringFieldUpdateOperationsInput | undefined;
    phone?: NullableStringFieldUpdateOperationsInput | undefined;
    zipcode?: NullableStringFieldUpdateOperationsInput | undefined;
    name_suffix?: NullableStringFieldUpdateOperationsInput | undefined;
    websites?: NullableStringFieldUpdateOperationsInput | undefined;
    product?: NullableStringFieldUpdateOperationsInput | undefined;
    country?: NullableStringFieldUpdateOperationsInput | undefined;
    state?: NullableStringFieldUpdateOperationsInput | undefined;
    customer_since?: NullableDateTimeFieldUpdateOperationsInput | undefined;
    confirmed_email?: NullableStringFieldUpdateOperationsInput | undefined;
    date_of_birth?: NullableStringFieldUpdateOperationsInput | undefined;
    tax_vat_number?: NullableStringFieldUpdateOperationsInput | undefined;
    gender?: NullableStringFieldUpdateOperationsInput | undefined;
    description?: NullableStringFieldUpdateOperationsInput | undefined;
    short_description?: NullableStringFieldUpdateOperationsInput | undefined;
    image?: NullableStringFieldUpdateOperationsInput | undefined;
    Address?: NullableStringFieldUpdateOperationsInput | undefined;
    address_two?: NullableStringFieldUpdateOperationsInput | undefined;
    payment_type?: NullableStringFieldUpdateOperationsInput | undefined;
    username?: NullableStringFieldUpdateOperationsInput | undefined;
    password?: NullableStringFieldUpdateOperationsInput | undefined;
    comments?: NullableStringFieldUpdateOperationsInput | undefined;
    credit_memos?: NullableStringFieldUpdateOperationsInput | undefined;
    customer_group_customer_groupTocustomers?: NullableStringFieldUpdateOperationsInput | undefined;
    customer_payment?: NullableStringFieldUpdateOperationsInput | undefined;
    emails?: NullableStringFieldUpdateOperationsInput | undefined;
    mediamanager?: NullableStringFieldUpdateOperationsInput | undefined;
    messages?: NullableStringFieldUpdateOperationsInput | undefined;
    newsletter_subscribers?: NullableStringFieldUpdateOperationsInput | undefined;
    orders?: NullableStringFieldUpdateOperationsInput | undefined;
    projects?: NullableStringFieldUpdateOperationsInput | undefined;
    quotes?: NullableStringFieldUpdateOperationsInput | undefined;
    returns?: NullableStringFieldUpdateOperationsInput | undefined;
    workspaces?: NullableStringFieldUpdateOperationsInput | undefined;
}
