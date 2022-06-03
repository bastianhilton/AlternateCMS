import { Tax_ruleOrderByWithRelationInput } from "../../../inputs/Tax_ruleOrderByWithRelationInput";
import { Tax_ruleWhereInput } from "../../../inputs/Tax_ruleWhereInput";
import { Tax_ruleWhereUniqueInput } from "../../../inputs/Tax_ruleWhereUniqueInput";
export declare class ProductsTax_ruleArgs {
    where?: Tax_ruleWhereInput | undefined;
    orderBy?: Tax_ruleOrderByWithRelationInput[] | undefined;
    cursor?: Tax_ruleWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
    distinct?: Array<"id" | "name" | "tax_rate" | "prod_id"> | undefined;
}