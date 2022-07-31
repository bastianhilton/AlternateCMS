import { KnowledgebaseOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/KnowledgebaseOrderByWithRelationAndSearchRelevanceInput";
import { KnowledgebaseWhereInput } from "../../../inputs/KnowledgebaseWhereInput";
import { KnowledgebaseWhereUniqueInput } from "../../../inputs/KnowledgebaseWhereUniqueInput";
export declare class FindManyKnowledgebaseArgs {
    where?: KnowledgebaseWhereInput | undefined;
    orderBy?: KnowledgebaseOrderByWithRelationAndSearchRelevanceInput[] | undefined;
    cursor?: KnowledgebaseWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
    distinct?: Array<"id" | "created_at" | "name" | "status" | "revision" | "content" | "resolution" | "author" | "approver" | "date_modified"> | undefined;
}
