import { SettingscustomersOrderByWithAggregationInput } from "../../../inputs/SettingscustomersOrderByWithAggregationInput";
import { SettingscustomersScalarWhereWithAggregatesInput } from "../../../inputs/SettingscustomersScalarWhereWithAggregatesInput";
import { SettingscustomersWhereInput } from "../../../inputs/SettingscustomersWhereInput";
export declare class GroupBySettingscustomersArgs {
    where?: SettingscustomersWhereInput | undefined;
    orderBy?: SettingscustomersOrderByWithAggregationInput[] | undefined;
    by: Array<"id" | "created_at" | "login_as_customer" | "share_customer_accounts" | "online_minutes_interval" | "customer_data_lifetime" | "email_after_registration">;
    having?: SettingscustomersScalarWhereWithAggregatesInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
