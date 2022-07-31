import { Shop_settingsOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/Shop_settingsOrderByWithRelationAndSearchRelevanceInput";
import { Shop_settingsWhereInput } from "../../../inputs/Shop_settingsWhereInput";
import { Shop_settingsWhereUniqueInput } from "../../../inputs/Shop_settingsWhereUniqueInput";
export declare class AggregateShop_settingsArgs {
    where?: Shop_settingsWhereInput | undefined;
    orderBy?: Shop_settingsOrderByWithRelationAndSearchRelevanceInput[] | undefined;
    cursor?: Shop_settingsWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
