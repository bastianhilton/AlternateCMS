import { SettingshopAvgAggregate } from "../outputs/SettingshopAvgAggregate";
import { SettingshopCountAggregate } from "../outputs/SettingshopCountAggregate";
import { SettingshopMaxAggregate } from "../outputs/SettingshopMaxAggregate";
import { SettingshopMinAggregate } from "../outputs/SettingshopMinAggregate";
import { SettingshopSumAggregate } from "../outputs/SettingshopSumAggregate";
export declare class SettingshopGroupBy {
    id: bigint;
    enable_product_assignment: string | null;
    product_videos: string | null;
    seller_payouts: string | null;
    admin_approval: string | null;
    enable_review_system: string | null;
    customer_rate_vendor: string | null;
    multishipping: string | null;
    vendor_transaction_id: string | null;
    enable_vendor_product_attribute: string | null;
    _count: SettingshopCountAggregate | null;
    _avg: SettingshopAvgAggregate | null;
    _sum: SettingshopSumAggregate | null;
    _min: SettingshopMinAggregate | null;
    _max: SettingshopMaxAggregate | null;
}
