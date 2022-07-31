import { SourceOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/SourceOrderByWithRelationAndSearchRelevanceInput";
import { SourceWhereInput } from "../../../inputs/SourceWhereInput";
import { SourceWhereUniqueInput } from "../../../inputs/SourceWhereUniqueInput";
export declare class AggregateSourceArgs {
    where?: SourceWhereInput | undefined;
    orderBy?: SourceOrderByWithRelationAndSearchRelevanceInput[] | undefined;
    cursor?: SourceWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
