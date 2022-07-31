import { KnowledgebaseOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/KnowledgebaseOrderByWithRelationAndSearchRelevanceInput";
import { KnowledgebaseWhereInput } from "../../../inputs/KnowledgebaseWhereInput";
import { KnowledgebaseWhereUniqueInput } from "../../../inputs/KnowledgebaseWhereUniqueInput";
export declare class AggregateKnowledgebaseArgs {
    where?: KnowledgebaseWhereInput | undefined;
    orderBy?: KnowledgebaseOrderByWithRelationAndSearchRelevanceInput[] | undefined;
    cursor?: KnowledgebaseWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
