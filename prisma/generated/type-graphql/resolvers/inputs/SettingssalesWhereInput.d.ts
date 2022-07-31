import { BigIntFilter } from "../inputs/BigIntFilter";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
export declare class SettingssalesWhereInput {
    AND?: SettingssalesWhereInput[] | undefined;
    OR?: SettingssalesWhereInput[] | undefined;
    NOT?: SettingssalesWhereInput[] | undefined;
    id?: BigIntFilter | undefined;
    created_at?: DateTimeNullableFilter | undefined;
    analytics_account_type?: StringNullableFilter | undefined;
    analytics_account_number?: StringNullableFilter | undefined;
    analytics_anonymizeip?: StringNullableFilter | undefined;
    analytics_content_experiments?: StringNullableFilter | undefined;
    adwords_conversionid?: StringNullableFilter | undefined;
    adwords_conversionlanguage?: StringNullableFilter | undefined;
    adwords_conversionformat?: StringNullableFilter | undefined;
    adwords_conversioncolor?: StringNullableFilter | undefined;
    adwords_conversionlabel?: StringNullableFilter | undefined;
    adwords_conversionvalue_type?: StringNullableFilter | undefined;
    adwords_sendorder?: StringNullableFilter | undefined;
    tag_manager_anonymizeip?: StringNullableFilter | undefined;
    tag_manager_contentexperiments?: StringNullableFilter | undefined;
    tag_manager_containerid?: StringNullableFilter | undefined;
}
