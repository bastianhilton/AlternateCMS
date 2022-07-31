import { SettingsmarketingOrderByWithAggregationInput } from "../../../inputs/SettingsmarketingOrderByWithAggregationInput";
import { SettingsmarketingScalarWhereWithAggregatesInput } from "../../../inputs/SettingsmarketingScalarWhereWithAggregatesInput";
import { SettingsmarketingWhereInput } from "../../../inputs/SettingsmarketingWhereInput";
export declare class GroupBySettingsmarketingArgs {
    where?: SettingsmarketingWhereInput | undefined;
    orderBy?: SettingsmarketingOrderByWithAggregationInput[] | undefined;
    by: Array<"id" | "mail_port" | "recaptcha_api" | "adsense_api" | "sitemap_url" | "customer_data_lifetime" | "mail_server">;
    having?: SettingsmarketingScalarWhereWithAggregatesInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
