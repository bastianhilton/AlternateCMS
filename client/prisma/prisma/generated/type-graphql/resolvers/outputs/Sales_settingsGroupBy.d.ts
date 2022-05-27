import { Sales_settingsAvgAggregate } from "../outputs/Sales_settingsAvgAggregate";
import { Sales_settingsCountAggregate } from "../outputs/Sales_settingsCountAggregate";
import { Sales_settingsMaxAggregate } from "../outputs/Sales_settingsMaxAggregate";
import { Sales_settingsMinAggregate } from "../outputs/Sales_settingsMinAggregate";
import { Sales_settingsSumAggregate } from "../outputs/Sales_settingsSumAggregate";
export declare class Sales_settingsGroupBy {
    id: bigint;
    created_at: Date | null;
    sales_email: string | null;
    hide_customer_ip: string | null;
    checkout_subtotal: string | null;
    checkout_discount: string | null;
    checkout_shipping: string | null;
    checkout_tax: string | null;
    checkout_fixed_product_tax: string | null;
    checkout_grand_total: string | null;
    checkout_gift_cards: string | null;
    checkout_store_credit: string | null;
    allow_reorder: string | null;
    allow_zero_grandtotal: string | null;
    invoice_logo: string | null;
    invoice_html_print: string | null;
    invoice_address: string | null;
    _count: Sales_settingsCountAggregate | null;
    _avg: Sales_settingsAvgAggregate | null;
    _sum: Sales_settingsSumAggregate | null;
    _min: Sales_settingsMinAggregate | null;
    _max: Sales_settingsMaxAggregate | null;
}