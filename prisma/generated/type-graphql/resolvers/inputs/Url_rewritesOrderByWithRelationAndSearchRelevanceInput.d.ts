import { Url_rewritesOrderByRelevanceInput } from "../inputs/Url_rewritesOrderByRelevanceInput";
export declare class Url_rewritesOrderByWithRelationAndSearchRelevanceInput {
    id?: "asc" | "desc" | undefined;
    request_path?: "asc" | "desc" | undefined;
    description?: "asc" | "desc" | undefined;
    redirect_type?: "asc" | "desc" | undefined;
    target_path?: "asc" | "desc" | undefined;
    store?: "asc" | "desc" | undefined;
    _relevance?: Url_rewritesOrderByRelevanceInput | undefined;
}
