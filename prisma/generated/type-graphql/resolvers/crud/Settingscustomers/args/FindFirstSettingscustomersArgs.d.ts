import { SettingscustomersOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/SettingscustomersOrderByWithRelationAndSearchRelevanceInput";
import { SettingscustomersWhereInput } from "../../../inputs/SettingscustomersWhereInput";
import { SettingscustomersWhereUniqueInput } from "../../../inputs/SettingscustomersWhereUniqueInput";
export declare class FindFirstSettingscustomersArgs {
    where?: SettingscustomersWhereInput | undefined;
    orderBy?: SettingscustomersOrderByWithRelationAndSearchRelevanceInput[] | undefined;
    cursor?: SettingscustomersWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
    distinct?: Array<"id" | "created_at" | "login_as_customer" | "share_customer_accounts" | "online_minutes_interval" | "customer_data_lifetime" | "email_after_registration"> | undefined;
}
