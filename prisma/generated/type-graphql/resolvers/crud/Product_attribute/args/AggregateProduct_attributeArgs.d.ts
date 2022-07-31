import { Product_attributeOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/Product_attributeOrderByWithRelationAndSearchRelevanceInput";
import { Product_attributeWhereInput } from "../../../inputs/Product_attributeWhereInput";
import { Product_attributeWhereUniqueInput } from "../../../inputs/Product_attributeWhereUniqueInput";
export declare class AggregateProduct_attributeArgs {
    where?: Product_attributeWhereInput | undefined;
    orderBy?: Product_attributeOrderByWithRelationAndSearchRelevanceInput[] | undefined;
    cursor?: Product_attributeWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
