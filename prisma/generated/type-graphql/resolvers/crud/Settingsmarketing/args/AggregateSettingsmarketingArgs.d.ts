import { SettingsmarketingOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/SettingsmarketingOrderByWithRelationAndSearchRelevanceInput";
import { SettingsmarketingWhereInput } from "../../../inputs/SettingsmarketingWhereInput";
import { SettingsmarketingWhereUniqueInput } from "../../../inputs/SettingsmarketingWhereUniqueInput";
export declare class AggregateSettingsmarketingArgs {
    where?: SettingsmarketingWhereInput | undefined;
    orderBy?: SettingsmarketingOrderByWithRelationAndSearchRelevanceInput[] | undefined;
    cursor?: SettingsmarketingWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
