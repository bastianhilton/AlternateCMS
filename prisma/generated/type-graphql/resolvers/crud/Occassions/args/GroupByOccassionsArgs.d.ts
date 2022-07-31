import { OccassionsOrderByWithAggregationInput } from "../../../inputs/OccassionsOrderByWithAggregationInput";
import { OccassionsScalarWhereWithAggregatesInput } from "../../../inputs/OccassionsScalarWhereWithAggregatesInput";
import { OccassionsWhereInput } from "../../../inputs/OccassionsWhereInput";
export declare class GroupByOccassionsArgs {
    where?: OccassionsWhereInput | undefined;
    orderBy?: OccassionsOrderByWithAggregationInput[] | undefined;
    by: Array<"id" | "created_at" | "code" | "name" | "category" | "tags" | "description" | "products" | "wishlists" | "products_occassionsToproducts" | "wishlists_occassionsTowishlists">;
    having?: OccassionsScalarWhereWithAggregatesInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
