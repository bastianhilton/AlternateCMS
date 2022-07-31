import { Url_rewritesOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/Url_rewritesOrderByWithRelationAndSearchRelevanceInput";
import { Url_rewritesWhereInput } from "../../../inputs/Url_rewritesWhereInput";
import { Url_rewritesWhereUniqueInput } from "../../../inputs/Url_rewritesWhereUniqueInput";
export declare class AggregateUrl_rewritesArgs {
    where?: Url_rewritesWhereInput | undefined;
    orderBy?: Url_rewritesOrderByWithRelationAndSearchRelevanceInput[] | undefined;
    cursor?: Url_rewritesWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
