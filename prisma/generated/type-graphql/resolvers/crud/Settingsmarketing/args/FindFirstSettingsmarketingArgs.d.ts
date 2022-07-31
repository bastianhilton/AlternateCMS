import { SettingsmarketingOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/SettingsmarketingOrderByWithRelationAndSearchRelevanceInput";
import { SettingsmarketingWhereInput } from "../../../inputs/SettingsmarketingWhereInput";
import { SettingsmarketingWhereUniqueInput } from "../../../inputs/SettingsmarketingWhereUniqueInput";
export declare class FindFirstSettingsmarketingArgs {
    where?: SettingsmarketingWhereInput | undefined;
    orderBy?: SettingsmarketingOrderByWithRelationAndSearchRelevanceInput[] | undefined;
    cursor?: SettingsmarketingWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
    distinct?: Array<"id" | "mail_port" | "recaptcha_api" | "adsense_api" | "sitemap_url" | "customer_data_lifetime" | "mail_server"> | undefined;
}
