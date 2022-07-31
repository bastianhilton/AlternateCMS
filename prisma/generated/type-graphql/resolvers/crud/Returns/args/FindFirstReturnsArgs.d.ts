import { ReturnsOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/ReturnsOrderByWithRelationAndSearchRelevanceInput";
import { ReturnsWhereInput } from "../../../inputs/ReturnsWhereInput";
import { ReturnsWhereUniqueInput } from "../../../inputs/ReturnsWhereUniqueInput";
export declare class FindFirstReturnsArgs {
    where?: ReturnsWhereInput | undefined;
    orderBy?: ReturnsOrderByWithRelationAndSearchRelevanceInput[] | undefined;
    cursor?: ReturnsWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
    distinct?: Array<"id" | "created_at" | "name" | "validity" | "return_prefix" | "prod_id" | "cust_id" | "customers" | "products"> | undefined;
}
