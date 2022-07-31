import { OccassionsAvgOrderByAggregateInput } from "../inputs/OccassionsAvgOrderByAggregateInput";
import { OccassionsCountOrderByAggregateInput } from "../inputs/OccassionsCountOrderByAggregateInput";
import { OccassionsMaxOrderByAggregateInput } from "../inputs/OccassionsMaxOrderByAggregateInput";
import { OccassionsMinOrderByAggregateInput } from "../inputs/OccassionsMinOrderByAggregateInput";
import { OccassionsSumOrderByAggregateInput } from "../inputs/OccassionsSumOrderByAggregateInput";
export declare class OccassionsOrderByWithAggregationInput {
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
    _count?: OccassionsCountOrderByAggregateInput | undefined;
    _avg?: OccassionsAvgOrderByAggregateInput | undefined;
    _max?: OccassionsMaxOrderByAggregateInput | undefined;
    _min?: OccassionsMinOrderByAggregateInput | undefined;
    _sum?: OccassionsSumOrderByAggregateInput | undefined;
}
