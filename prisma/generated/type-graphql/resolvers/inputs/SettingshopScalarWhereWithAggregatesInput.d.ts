import { BigIntWithAggregatesFilter } from "../inputs/BigIntWithAggregatesFilter";
import { StringNullableWithAggregatesFilter } from "../inputs/StringNullableWithAggregatesFilter";
export declare class SettingshopScalarWhereWithAggregatesInput {
    AND?: SettingshopScalarWhereWithAggregatesInput[] | undefined;
    OR?: SettingshopScalarWhereWithAggregatesInput[] | undefined;
    NOT?: SettingshopScalarWhereWithAggregatesInput[] | undefined;
    id?: BigIntWithAggregatesFilter | undefined;
    enable_product_assignment?: StringNullableWithAggregatesFilter | undefined;
    product_videos?: StringNullableWithAggregatesFilter | undefined;
    seller_payouts?: StringNullableWithAggregatesFilter | undefined;
    admin_approval?: StringNullableWithAggregatesFilter | undefined;
    enable_review_system?: StringNullableWithAggregatesFilter | undefined;
    customer_rate_vendor?: StringNullableWithAggregatesFilter | undefined;
    multishipping?: StringNullableWithAggregatesFilter | undefined;
    vendor_transaction_id?: StringNullableWithAggregatesFilter | undefined;
    enable_vendor_product_attribute?: StringNullableWithAggregatesFilter | undefined;
}
