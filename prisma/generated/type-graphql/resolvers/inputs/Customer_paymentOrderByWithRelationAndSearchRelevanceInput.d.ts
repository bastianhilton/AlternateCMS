import { Customer_paymentOrderByRelevanceInput } from "../inputs/Customer_paymentOrderByRelevanceInput";
export declare class Customer_paymentOrderByWithRelationAndSearchRelevanceInput {
    id?: "asc" | "desc" | undefined;
    created_at?: "asc" | "desc" | undefined;
    cust_id?: "asc" | "desc" | undefined;
    payment_info?: "asc" | "desc" | undefined;
    provider?: "asc" | "desc" | undefined;
    account_no?: "asc" | "desc" | undefined;
    expiry?: "asc" | "desc" | undefined;
    customers?: "asc" | "desc" | undefined;
    transactions?: "asc" | "desc" | undefined;
    _relevance?: Customer_paymentOrderByRelevanceInput | undefined;
}
