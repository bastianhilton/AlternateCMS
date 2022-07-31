import { BigIntFilter } from "../inputs/BigIntFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
export declare class SettingshopWhereInput {
    AND?: SettingshopWhereInput[] | undefined;
    OR?: SettingshopWhereInput[] | undefined;
    NOT?: SettingshopWhereInput[] | undefined;
    id?: BigIntFilter | undefined;
    enable_product_assignment?: StringNullableFilter | undefined;
    product_videos?: StringNullableFilter | undefined;
    seller_payouts?: StringNullableFilter | undefined;
    admin_approval?: StringNullableFilter | undefined;
    enable_review_system?: StringNullableFilter | undefined;
    customer_rate_vendor?: StringNullableFilter | undefined;
    multishipping?: StringNullableFilter | undefined;
    vendor_transaction_id?: StringNullableFilter | undefined;
    enable_vendor_product_attribute?: StringNullableFilter | undefined;
}
