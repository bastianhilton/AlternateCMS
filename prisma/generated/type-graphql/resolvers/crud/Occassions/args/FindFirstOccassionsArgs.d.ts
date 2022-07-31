import { OccassionsOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/OccassionsOrderByWithRelationAndSearchRelevanceInput";
import { OccassionsWhereInput } from "../../../inputs/OccassionsWhereInput";
import { OccassionsWhereUniqueInput } from "../../../inputs/OccassionsWhereUniqueInput";
export declare class FindFirstOccassionsArgs {
    where?: OccassionsWhereInput | undefined;
    orderBy?: OccassionsOrderByWithRelationAndSearchRelevanceInput[] | undefined;
    cursor?: OccassionsWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
    distinct?: Array<"id" | "created_at" | "code" | "name" | "category" | "tags" | "description" | "products" | "wishlists" | "products_occassionsToproducts" | "wishlists_occassionsTowishlists"> | undefined;
}
