import { BigIntWithAggregatesFilter } from "../inputs/BigIntWithAggregatesFilter";
import { StringNullableWithAggregatesFilter } from "../inputs/StringNullableWithAggregatesFilter";
export declare class SettingsmarketingScalarWhereWithAggregatesInput {
    AND?: SettingsmarketingScalarWhereWithAggregatesInput[] | undefined;
    OR?: SettingsmarketingScalarWhereWithAggregatesInput[] | undefined;
    NOT?: SettingsmarketingScalarWhereWithAggregatesInput[] | undefined;
    id?: BigIntWithAggregatesFilter | undefined;
    mail_port?: StringNullableWithAggregatesFilter | undefined;
    recaptcha_api?: StringNullableWithAggregatesFilter | undefined;
    adsense_api?: StringNullableWithAggregatesFilter | undefined;
    sitemap_url?: StringNullableWithAggregatesFilter | undefined;
    customer_data_lifetime?: StringNullableWithAggregatesFilter | undefined;
    mail_server?: StringNullableWithAggregatesFilter | undefined;
}
