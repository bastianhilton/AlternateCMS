import { SettingsmarketingAvgOrderByAggregateInput } from "../inputs/SettingsmarketingAvgOrderByAggregateInput";
import { SettingsmarketingCountOrderByAggregateInput } from "../inputs/SettingsmarketingCountOrderByAggregateInput";
import { SettingsmarketingMaxOrderByAggregateInput } from "../inputs/SettingsmarketingMaxOrderByAggregateInput";
import { SettingsmarketingMinOrderByAggregateInput } from "../inputs/SettingsmarketingMinOrderByAggregateInput";
import { SettingsmarketingSumOrderByAggregateInput } from "../inputs/SettingsmarketingSumOrderByAggregateInput";
export declare class SettingsmarketingOrderByWithAggregationInput {
    id?: "asc" | "desc" | undefined;
    mail_port?: "asc" | "desc" | undefined;
    recaptcha_api?: "asc" | "desc" | undefined;
    adsense_api?: "asc" | "desc" | undefined;
    sitemap_url?: "asc" | "desc" | undefined;
    customer_data_lifetime?: "asc" | "desc" | undefined;
    mail_server?: "asc" | "desc" | undefined;
    _count?: SettingsmarketingCountOrderByAggregateInput | undefined;
    _avg?: SettingsmarketingAvgOrderByAggregateInput | undefined;
    _max?: SettingsmarketingMaxOrderByAggregateInput | undefined;
    _min?: SettingsmarketingMinOrderByAggregateInput | undefined;
    _sum?: SettingsmarketingSumOrderByAggregateInput | undefined;
}
