import { ShopsOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/ShopsOrderByWithRelationAndSearchRelevanceInput";
import { ShopsWhereInput } from "../../../inputs/ShopsWhereInput";
import { ShopsWhereUniqueInput } from "../../../inputs/ShopsWhereUniqueInput";
export declare class FindFirstShopsArgs {
    where?: ShopsWhereInput | undefined;
    orderBy?: ShopsOrderByWithRelationAndSearchRelevanceInput[] | undefined;
    cursor?: ShopsWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
    distinct?: Array<"id" | "name" | "description" | "image" | "website" | "products" | "articles" | "customers" | "comments" | "coupons" | "categories" | "polls" | "quotes" | "reviews" | "gift_certificates" | "rating" | "tags" | "users" | "invoices" | "reports" | "reward_points" | "special_discounts" | "statistics" | "stocks" | "country" | "physical_store" | "type" | "workspaces"> | undefined;
}
