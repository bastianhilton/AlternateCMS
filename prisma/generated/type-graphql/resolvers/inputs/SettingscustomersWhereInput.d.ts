import { BigIntFilter } from "../inputs/BigIntFilter";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
export declare class SettingscustomersWhereInput {
    AND?: SettingscustomersWhereInput[] | undefined;
    OR?: SettingscustomersWhereInput[] | undefined;
    NOT?: SettingscustomersWhereInput[] | undefined;
    id?: BigIntFilter | undefined;
    created_at?: DateTimeNullableFilter | undefined;
    login_as_customer?: StringNullableFilter | undefined;
    share_customer_accounts?: StringNullableFilter | undefined;
    online_minutes_interval?: StringNullableFilter | undefined;
    customer_data_lifetime?: StringNullableFilter | undefined;
    email_after_registration?: StringNullableFilter | undefined;
}
