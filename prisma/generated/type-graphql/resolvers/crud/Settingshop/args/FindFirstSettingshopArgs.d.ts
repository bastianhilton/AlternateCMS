import { SettingshopOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/SettingshopOrderByWithRelationAndSearchRelevanceInput";
import { SettingshopWhereInput } from "../../../inputs/SettingshopWhereInput";
import { SettingshopWhereUniqueInput } from "../../../inputs/SettingshopWhereUniqueInput";
export declare class FindFirstSettingshopArgs {
    where?: SettingshopWhereInput | undefined;
    orderBy?: SettingshopOrderByWithRelationAndSearchRelevanceInput[] | undefined;
    cursor?: SettingshopWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
    distinct?: Array<"id" | "enable_product_assignment" | "product_videos" | "seller_payouts" | "admin_approval" | "enable_review_system" | "customer_rate_vendor" | "multishipping" | "vendor_transaction_id" | "enable_vendor_product_attribute"> | undefined;
}
