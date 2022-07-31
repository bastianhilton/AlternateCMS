import { BigIntFilter } from "../inputs/BigIntFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
export declare class SettingsmarketingWhereInput {
    AND?: SettingsmarketingWhereInput[] | undefined;
    OR?: SettingsmarketingWhereInput[] | undefined;
    NOT?: SettingsmarketingWhereInput[] | undefined;
    id?: BigIntFilter | undefined;
    mail_port?: StringNullableFilter | undefined;
    recaptcha_api?: StringNullableFilter | undefined;
    adsense_api?: StringNullableFilter | undefined;
    sitemap_url?: StringNullableFilter | undefined;
    customer_data_lifetime?: StringNullableFilter | undefined;
    mail_server?: StringNullableFilter | undefined;
}
