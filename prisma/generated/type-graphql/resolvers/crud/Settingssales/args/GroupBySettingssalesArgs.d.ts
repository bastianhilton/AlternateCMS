import { SettingssalesOrderByWithAggregationInput } from "../../../inputs/SettingssalesOrderByWithAggregationInput";
import { SettingssalesScalarWhereWithAggregatesInput } from "../../../inputs/SettingssalesScalarWhereWithAggregatesInput";
import { SettingssalesWhereInput } from "../../../inputs/SettingssalesWhereInput";
export declare class GroupBySettingssalesArgs {
    where?: SettingssalesWhereInput | undefined;
    orderBy?: SettingssalesOrderByWithAggregationInput[] | undefined;
    by: Array<"id" | "created_at" | "analytics_account_type" | "analytics_account_number" | "analytics_anonymizeip" | "analytics_content_experiments" | "adwords_conversionid" | "adwords_conversionlanguage" | "adwords_conversionformat" | "adwords_conversioncolor" | "adwords_conversionlabel" | "adwords_conversionvalue_type" | "adwords_sendorder" | "tag_manager_anonymizeip" | "tag_manager_contentexperiments" | "tag_manager_containerid">;
    having?: SettingssalesScalarWhereWithAggregatesInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
