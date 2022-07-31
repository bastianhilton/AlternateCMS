import { Product_attribute_setOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/Product_attribute_setOrderByWithRelationAndSearchRelevanceInput";
import { Product_attribute_setWhereInput } from "../../../inputs/Product_attribute_setWhereInput";
import { Product_attribute_setWhereUniqueInput } from "../../../inputs/Product_attribute_setWhereUniqueInput";
export declare class FindFirstProduct_attribute_setArgs {
    where?: Product_attribute_setWhereInput | undefined;
    orderBy?: Product_attribute_setOrderByWithRelationAndSearchRelevanceInput[] | undefined;
    cursor?: Product_attribute_setWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
    distinct?: Array<"id" | "name" | "based_on" | "attribute_id" | "product_attribute"> | undefined;
}
