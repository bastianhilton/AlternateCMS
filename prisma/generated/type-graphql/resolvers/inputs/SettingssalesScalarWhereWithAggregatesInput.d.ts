import { BigIntWithAggregatesFilter } from "../inputs/BigIntWithAggregatesFilter";
import { DateTimeNullableWithAggregatesFilter } from "../inputs/DateTimeNullableWithAggregatesFilter";
import { StringNullableWithAggregatesFilter } from "../inputs/StringNullableWithAggregatesFilter";
export declare class SettingssalesScalarWhereWithAggregatesInput {
    AND?: SettingssalesScalarWhereWithAggregatesInput[] | undefined;
    OR?: SettingssalesScalarWhereWithAggregatesInput[] | undefined;
    NOT?: SettingssalesScalarWhereWithAggregatesInput[] | undefined;
    id?: BigIntWithAggregatesFilter | undefined;
    created_at?: DateTimeNullableWithAggregatesFilter | undefined;
    analytics_account_type?: StringNullableWithAggregatesFilter | undefined;
    analytics_account_number?: StringNullableWithAggregatesFilter | undefined;
    analytics_anonymizeip?: StringNullableWithAggregatesFilter | undefined;
    analytics_content_experiments?: StringNullableWithAggregatesFilter | undefined;
    adwords_conversionid?: StringNullableWithAggregatesFilter | undefined;
    adwords_conversionlanguage?: StringNullableWithAggregatesFilter | undefined;
    adwords_conversionformat?: StringNullableWithAggregatesFilter | undefined;
    adwords_conversioncolor?: StringNullableWithAggregatesFilter | undefined;
    adwords_conversionlabel?: StringNullableWithAggregatesFilter | undefined;
    adwords_conversionvalue_type?: StringNullableWithAggregatesFilter | undefined;
    adwords_sendorder?: StringNullableWithAggregatesFilter | undefined;
    tag_manager_anonymizeip?: StringNullableWithAggregatesFilter | undefined;
    tag_manager_contentexperiments?: StringNullableWithAggregatesFilter | undefined;
    tag_manager_containerid?: StringNullableWithAggregatesFilter | undefined;
}
