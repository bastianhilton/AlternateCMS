import { Newsletter_subscribersOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/Newsletter_subscribersOrderByWithRelationAndSearchRelevanceInput";
import { Newsletter_subscribersWhereInput } from "../../../inputs/Newsletter_subscribersWhereInput";
import { Newsletter_subscribersWhereUniqueInput } from "../../../inputs/Newsletter_subscribersWhereUniqueInput";
export declare class FindFirstNewsletter_subscribersArgs {
    where?: Newsletter_subscribersWhereInput | undefined;
    orderBy?: Newsletter_subscribersOrderByWithRelationAndSearchRelevanceInput[] | undefined;
    cursor?: Newsletter_subscribersWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
    distinct?: Array<"id" | "email" | "customer_first_name" | "customer_last_name" | "store" | "status" | "websites" | "created_at" | "cust_id" | "customers"> | undefined;
}
