import { SettingscustomersAvgOrderByAggregateInput } from "../inputs/SettingscustomersAvgOrderByAggregateInput";
import { SettingscustomersCountOrderByAggregateInput } from "../inputs/SettingscustomersCountOrderByAggregateInput";
import { SettingscustomersMaxOrderByAggregateInput } from "../inputs/SettingscustomersMaxOrderByAggregateInput";
import { SettingscustomersMinOrderByAggregateInput } from "../inputs/SettingscustomersMinOrderByAggregateInput";
import { SettingscustomersSumOrderByAggregateInput } from "../inputs/SettingscustomersSumOrderByAggregateInput";
export declare class SettingscustomersOrderByWithAggregationInput {
    id?: "asc" | "desc" | undefined;
    created_at?: "asc" | "desc" | undefined;
    login_as_customer?: "asc" | "desc" | undefined;
    share_customer_accounts?: "asc" | "desc" | undefined;
    online_minutes_interval?: "asc" | "desc" | undefined;
    customer_data_lifetime?: "asc" | "desc" | undefined;
    email_after_registration?: "asc" | "desc" | undefined;
    _count?: SettingscustomersCountOrderByAggregateInput | undefined;
    _avg?: SettingscustomersAvgOrderByAggregateInput | undefined;
    _max?: SettingscustomersMaxOrderByAggregateInput | undefined;
    _min?: SettingscustomersMinOrderByAggregateInput | undefined;
    _sum?: SettingscustomersSumOrderByAggregateInput | undefined;
}
