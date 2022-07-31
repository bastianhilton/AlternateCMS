import { SettingshopAvgOrderByAggregateInput } from "../inputs/SettingshopAvgOrderByAggregateInput";
import { SettingshopCountOrderByAggregateInput } from "../inputs/SettingshopCountOrderByAggregateInput";
import { SettingshopMaxOrderByAggregateInput } from "../inputs/SettingshopMaxOrderByAggregateInput";
import { SettingshopMinOrderByAggregateInput } from "../inputs/SettingshopMinOrderByAggregateInput";
import { SettingshopSumOrderByAggregateInput } from "../inputs/SettingshopSumOrderByAggregateInput";
export declare class SettingshopOrderByWithAggregationInput {
    id?: "asc" | "desc" | undefined;
    enable_product_assignment?: "asc" | "desc" | undefined;
    product_videos?: "asc" | "desc" | undefined;
    seller_payouts?: "asc" | "desc" | undefined;
    admin_approval?: "asc" | "desc" | undefined;
    enable_review_system?: "asc" | "desc" | undefined;
    customer_rate_vendor?: "asc" | "desc" | undefined;
    multishipping?: "asc" | "desc" | undefined;
    vendor_transaction_id?: "asc" | "desc" | undefined;
    enable_vendor_product_attribute?: "asc" | "desc" | undefined;
    _count?: SettingshopCountOrderByAggregateInput | undefined;
    _avg?: SettingshopAvgOrderByAggregateInput | undefined;
    _max?: SettingshopMaxOrderByAggregateInput | undefined;
    _min?: SettingshopMinOrderByAggregateInput | undefined;
    _sum?: SettingshopSumOrderByAggregateInput | undefined;
}
