import { OccassionsOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/OccassionsOrderByWithRelationAndSearchRelevanceInput";
import { OccassionsWhereInput } from "../../../inputs/OccassionsWhereInput";
import { OccassionsWhereUniqueInput } from "../../../inputs/OccassionsWhereUniqueInput";
export declare class AggregateOccassionsArgs {
    where?: OccassionsWhereInput | undefined;
    orderBy?: OccassionsOrderByWithRelationAndSearchRelevanceInput[] | undefined;
    cursor?: OccassionsWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
