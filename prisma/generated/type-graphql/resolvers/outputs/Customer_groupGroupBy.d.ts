import { Customer_groupAvgAggregate } from "../outputs/Customer_groupAvgAggregate";
import { Customer_groupCountAggregate } from "../outputs/Customer_groupCountAggregate";
import { Customer_groupMaxAggregate } from "../outputs/Customer_groupMaxAggregate";
import { Customer_groupMinAggregate } from "../outputs/Customer_groupMinAggregate";
import { Customer_groupSumAggregate } from "../outputs/Customer_groupSumAggregate";
export declare class Customer_groupGroupBy {
    id: bigint;
    created_at: Date | null;
    name: string | null;
    tax_class: string | null;
    cust_id: number;
    customers: string | null;
    _count: Customer_groupCountAggregate | null;
    _avg: Customer_groupAvgAggregate | null;
    _sum: Customer_groupSumAggregate | null;
    _min: Customer_groupMinAggregate | null;
    _max: Customer_groupMaxAggregate | null;
}
