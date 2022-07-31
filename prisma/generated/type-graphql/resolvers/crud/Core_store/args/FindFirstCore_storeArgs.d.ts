import { Core_storeOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/Core_storeOrderByWithRelationAndSearchRelevanceInput";
import { Core_storeWhereInput } from "../../../inputs/Core_storeWhereInput";
import { Core_storeWhereUniqueInput } from "../../../inputs/Core_storeWhereUniqueInput";
export declare class FindFirstCore_storeArgs {
    where?: Core_storeWhereInput | undefined;
    orderBy?: Core_storeOrderByWithRelationAndSearchRelevanceInput[] | undefined;
    cursor?: Core_storeWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
    distinct?: Array<"id" | "key" | "value" | "type" | "environment" | "tag"> | undefined;
}
