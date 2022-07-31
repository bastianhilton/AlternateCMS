import { BigIntWithAggregatesFilter } from "../inputs/BigIntWithAggregatesFilter";
import { DateTimeNullableWithAggregatesFilter } from "../inputs/DateTimeNullableWithAggregatesFilter";
import { StringNullableWithAggregatesFilter } from "../inputs/StringNullableWithAggregatesFilter";
export declare class SettingscustomersScalarWhereWithAggregatesInput {
    AND?: SettingscustomersScalarWhereWithAggregatesInput[] | undefined;
    OR?: SettingscustomersScalarWhereWithAggregatesInput[] | undefined;
    NOT?: SettingscustomersScalarWhereWithAggregatesInput[] | undefined;
    id?: BigIntWithAggregatesFilter | undefined;
    created_at?: DateTimeNullableWithAggregatesFilter | undefined;
    login_as_customer?: StringNullableWithAggregatesFilter | undefined;
    share_customer_accounts?: StringNullableWithAggregatesFilter | undefined;
    online_minutes_interval?: StringNullableWithAggregatesFilter | undefined;
    customer_data_lifetime?: StringNullableWithAggregatesFilter | undefined;
    email_after_registration?: StringNullableWithAggregatesFilter | undefined;
}
