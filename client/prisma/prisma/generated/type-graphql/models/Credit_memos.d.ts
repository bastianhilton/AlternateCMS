import { Customers } from "../models/Customers";
import { Products } from "../models/Products";
export declare class Credit_memos {
    credit_memo: string;
    order_number: number;
    created?: Date | null;
    bill_to_name: string;
    status?: string | null;
    refunded?: string | null;
    action?: string | null;
    id: bigint;
    cust_id: number;
    prod_id: bigint;
    customers?: Customers;
    products?: Products;
}
