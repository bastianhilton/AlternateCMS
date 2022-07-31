import { SettingssalesOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/SettingssalesOrderByWithRelationAndSearchRelevanceInput";
import { SettingssalesWhereInput } from "../../../inputs/SettingssalesWhereInput";
import { SettingssalesWhereUniqueInput } from "../../../inputs/SettingssalesWhereUniqueInput";
export declare class FindFirstSettingssalesArgs {
    where?: SettingssalesWhereInput | undefined;
    orderBy?: SettingssalesOrderByWithRelationAndSearchRelevanceInput[] | undefined;
    cursor?: SettingssalesWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
    distinct?: Array<"id" | "created_at" | "analytics_account_type" | "analytics_account_number" | "analytics_anonymizeip" | "analytics_content_experiments" | "adwords_conversionid" | "adwords_conversionlanguage" | "adwords_conversionformat" | "adwords_conversioncolor" | "adwords_conversionlabel" | "adwords_conversionvalue_type" | "adwords_sendorder" | "tag_manager_anonymizeip" | "tag_manager_contentexperiments" | "tag_manager_containerid"> | undefined;
}
