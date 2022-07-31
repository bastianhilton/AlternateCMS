import { OccassionsOrderByRelevanceInput } from "../inputs/OccassionsOrderByRelevanceInput";
export declare class OccassionsOrderByWithRelationAndSearchRelevanceInput {
    id?: "asc" | "desc" | undefined;
    created_at?: "asc" | "desc" | undefined;
    code?: "asc" | "desc" | undefined;
    name?: "asc" | "desc" | undefined;
    category?: "asc" | "desc" | undefined;
    tags?: "asc" | "desc" | undefined;
    description?: "asc" | "desc" | undefined;
    products?: "asc" | "desc" | undefined;
    wishlists?: "asc" | "desc" | undefined;
    products_occassionsToproducts?: "asc" | "desc" | undefined;
    wishlists_occassionsTowishlists?: "asc" | "desc" | undefined;
    _relevance?: OccassionsOrderByRelevanceInput | undefined;
}
