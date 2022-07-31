import { SettingssalesOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/SettingssalesOrderByWithRelationAndSearchRelevanceInput";
import { SettingssalesWhereInput } from "../../../inputs/SettingssalesWhereInput";
import { SettingssalesWhereUniqueInput } from "../../../inputs/SettingssalesWhereUniqueInput";
export declare class AggregateSettingssalesArgs {
    where?: SettingssalesWhereInput | undefined;
    orderBy?: SettingssalesOrderByWithRelationAndSearchRelevanceInput[] | undefined;
    cursor?: SettingssalesWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
