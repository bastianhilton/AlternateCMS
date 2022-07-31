import { ShopsOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/ShopsOrderByWithRelationAndSearchRelevanceInput";
import { ShopsWhereInput } from "../../../inputs/ShopsWhereInput";
import { ShopsWhereUniqueInput } from "../../../inputs/ShopsWhereUniqueInput";
export declare class AggregateShopsArgs {
    where?: ShopsWhereInput | undefined;
    orderBy?: ShopsOrderByWithRelationAndSearchRelevanceInput[] | undefined;
    cursor?: ShopsWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
