import { ArticlesOrderByRelevanceInput } from "../inputs/ArticlesOrderByRelevanceInput";
export declare class ArticlesOrderByWithRelationAndSearchRelevanceInput {
    id?: "asc" | "desc" | undefined;
    name?: "asc" | "desc" | undefined;
    excerpt?: "asc" | "desc" | undefined;
    content?: "asc" | "desc" | undefined;
    image?: "asc" | "desc" | undefined;
    categories?: "asc" | "desc" | undefined;
    customers?: "asc" | "desc" | undefined;
    users?: "asc" | "desc" | undefined;
    published?: "asc" | "desc" | undefined;
    cust_id?: "asc" | "desc" | undefined;
    isPublic?: "asc" | "desc" | undefined;
    meta_description?: "asc" | "desc" | undefined;
    meta_name?: "asc" | "desc" | undefined;
    meta_url?: "asc" | "desc" | undefined;
    tags?: "asc" | "desc" | undefined;
    _relevance?: ArticlesOrderByRelevanceInput | undefined;
}
