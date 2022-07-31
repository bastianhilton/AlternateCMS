import { KnowledgebaseOrderByRelevanceInput } from "../inputs/KnowledgebaseOrderByRelevanceInput";
export declare class KnowledgebaseOrderByWithRelationAndSearchRelevanceInput {
    id?: "asc" | "desc" | undefined;
    created_at?: "asc" | "desc" | undefined;
    name?: "asc" | "desc" | undefined;
    status?: "asc" | "desc" | undefined;
    revision?: "asc" | "desc" | undefined;
    content?: "asc" | "desc" | undefined;
    resolution?: "asc" | "desc" | undefined;
    author?: "asc" | "desc" | undefined;
    approver?: "asc" | "desc" | undefined;
    date_modified?: "asc" | "desc" | undefined;
    _relevance?: KnowledgebaseOrderByRelevanceInput | undefined;
}
