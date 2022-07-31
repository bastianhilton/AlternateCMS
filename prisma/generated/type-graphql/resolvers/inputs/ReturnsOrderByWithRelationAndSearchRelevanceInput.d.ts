import { ReturnsOrderByRelevanceInput } from "../inputs/ReturnsOrderByRelevanceInput";
export declare class ReturnsOrderByWithRelationAndSearchRelevanceInput {
    id?: "asc" | "desc" | undefined;
    created_at?: "asc" | "desc" | undefined;
    name?: "asc" | "desc" | undefined;
    validity?: "asc" | "desc" | undefined;
    return_prefix?: "asc" | "desc" | undefined;
    prod_id?: "asc" | "desc" | undefined;
    cust_id?: "asc" | "desc" | undefined;
    customers?: "asc" | "desc" | undefined;
    products?: "asc" | "desc" | undefined;
    _relevance?: ReturnsOrderByRelevanceInput | undefined;
}
