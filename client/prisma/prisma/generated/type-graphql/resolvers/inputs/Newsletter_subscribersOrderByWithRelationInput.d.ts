import { CustomersOrderByWithRelationInput } from "../inputs/CustomersOrderByWithRelationInput";
export declare class Newsletter_subscribersOrderByWithRelationInput {
    id?: "asc" | "desc" | undefined;
    email?: "asc" | "desc" | undefined;
    customer_first_name?: "asc" | "desc" | undefined;
    customer_last_name?: "asc" | "desc" | undefined;
    store?: "asc" | "desc" | undefined;
    status?: "asc" | "desc" | undefined;
    websites?: "asc" | "desc" | undefined;
    created_at?: "asc" | "desc" | undefined;
    cust_id?: "asc" | "desc" | undefined;
    customers?: CustomersOrderByWithRelationInput | undefined;
}
