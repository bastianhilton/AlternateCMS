import { CustomersCreateNestedOneWithoutQuotesInput } from "../inputs/CustomersCreateNestedOneWithoutQuotesInput";
import { OrdersCreateNestedOneWithoutQuotesInput } from "../inputs/OrdersCreateNestedOneWithoutQuotesInput";
export declare class QuotesCreateWithoutProducts_productsToquotesInput {
    name: string;
    grand_total?: string | undefined;
    created_at?: Date | undefined;
    categories?: string | undefined;
    valid_until?: string | undefined;
    quote_stage?: string | undefined;
    customers?: string | undefined;
    invoice_status?: string | undefined;
    payment_terms?: string | undefined;
    assigned_to?: string | undefined;
    approval_status?: string | undefined;
    approval_issues?: string | undefined;
    account?: string | undefined;
    contact?: string | undefined;
    billing_street?: string | undefined;
    billing_city?: string | undefined;
    billing_state?: string | undefined;
    billing_postal?: string | undefined;
    billing_country?: string | undefined;
    shipping_street?: string | undefined;
    shipping_city?: string | undefined;
    shipping_state?: string | undefined;
    shipping_postal?: string | undefined;
    shipping_country?: string | undefined;
    currency?: string | undefined;
    total?: string | undefined;
    subtotal?: string | undefined;
    discount?: string | undefined;
    shipping?: string | undefined;
    shipping_tax?: string | undefined;
    tax?: string | undefined;
    line_item_name?: string | undefined;
    line_item_total?: string | undefined;
    line_item_subtotal?: string | undefined;
    line_item_discount?: string | undefined;
    line_item_tax?: string | undefined;
    line_item_group_total?: string | undefined;
    customers_customersToquotes?: CustomersCreateNestedOneWithoutQuotesInput | undefined;
    orders?: OrdersCreateNestedOneWithoutQuotesInput | undefined;
}