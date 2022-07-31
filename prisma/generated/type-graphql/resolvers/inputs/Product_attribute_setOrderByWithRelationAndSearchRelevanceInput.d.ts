import { Product_attribute_setOrderByRelevanceInput } from "../inputs/Product_attribute_setOrderByRelevanceInput";
export declare class Product_attribute_setOrderByWithRelationAndSearchRelevanceInput {
    id?: "asc" | "desc" | undefined;
    name?: "asc" | "desc" | undefined;
    based_on?: "asc" | "desc" | undefined;
    attribute_id?: "asc" | "desc" | undefined;
    product_attribute?: "asc" | "desc" | undefined;
    _relevance?: Product_attribute_setOrderByRelevanceInput | undefined;
}
