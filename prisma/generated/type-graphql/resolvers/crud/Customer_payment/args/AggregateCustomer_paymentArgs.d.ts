import { Customer_paymentOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/Customer_paymentOrderByWithRelationAndSearchRelevanceInput";
import { Customer_paymentWhereInput } from "../../../inputs/Customer_paymentWhereInput";
import { Customer_paymentWhereUniqueInput } from "../../../inputs/Customer_paymentWhereUniqueInput";
export declare class AggregateCustomer_paymentArgs {
    where?: Customer_paymentWhereInput | undefined;
    orderBy?: Customer_paymentOrderByWithRelationAndSearchRelevanceInput[] | undefined;
    cursor?: Customer_paymentWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
