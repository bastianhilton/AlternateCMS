import { BigIntFilter } from "../inputs/BigIntFilter";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
export declare class TargetsWhereInput {
    AND?: TargetsWhereInput[] | undefined;
    OR?: TargetsWhereInput[] | undefined;
    NOT?: TargetsWhereInput[] | undefined;
    id?: BigIntFilter | undefined;
    created_at?: DateTimeNullableFilter | undefined;
    Prefix?: StringNullableFilter | undefined;
    first_name?: StringNullableFilter | undefined;
    last_name?: StringNullableFilter | undefined;
    department?: StringNullableFilter | undefined;
    account_name?: StringNullableFilter | undefined;
    address?: StringNullableFilter | undefined;
    postalcode?: StringNullableFilter | undefined;
    city?: StringNullableFilter | undefined;
    state?: StringNullableFilter | undefined;
    country?: StringNullableFilter | undefined;
    email?: StringNullableFilter | undefined;
    description?: StringNullableFilter | undefined;
    fax?: StringNullableFilter | undefined;
    website?: StringNullableFilter | undefined;
    mobile?: StringNullableFilter | undefined;
    job_title?: StringNullableFilter | undefined;
    alt_address?: StringNullableFilter | undefined;
    alt_postalcode?: StringNullableFilter | undefined;
    alt_city?: StringNullableFilter | undefined;
    alt_state?: StringNullableFilter | undefined;
    alt_country?: StringNullableFilter | undefined;
    office_phone?: StringNullableFilter | undefined;
    customer_name?: StringNullableFilter | undefined;
    email_opt_out?: StringNullableFilter | undefined;
    donotcall?: StringNullableFilter | undefined;
}