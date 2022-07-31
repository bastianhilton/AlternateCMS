import { SettingshopOrderByWithAggregationInput } from "../../../inputs/SettingshopOrderByWithAggregationInput";
import { SettingshopScalarWhereWithAggregatesInput } from "../../../inputs/SettingshopScalarWhereWithAggregatesInput";
import { SettingshopWhereInput } from "../../../inputs/SettingshopWhereInput";
export declare class GroupBySettingshopArgs {
    where?: SettingshopWhereInput | undefined;
    orderBy?: SettingshopOrderByWithAggregationInput[] | undefined;
    by: Array<"id" | "enable_product_assignment" | "product_videos" | "seller_payouts" | "admin_approval" | "enable_review_system" | "customer_rate_vendor" | "multishipping" | "vendor_transaction_id" | "enable_vendor_product_attribute">;
    having?: SettingshopScalarWhereWithAggregatesInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
