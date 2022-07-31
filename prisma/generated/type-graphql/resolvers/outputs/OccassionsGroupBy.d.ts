import { OccassionsAvgAggregate } from "../outputs/OccassionsAvgAggregate";
import { OccassionsCountAggregate } from "../outputs/OccassionsCountAggregate";
import { OccassionsMaxAggregate } from "../outputs/OccassionsMaxAggregate";
import { OccassionsMinAggregate } from "../outputs/OccassionsMinAggregate";
import { OccassionsSumAggregate } from "../outputs/OccassionsSumAggregate";
export declare class OccassionsGroupBy {
    id: bigint;
    created_at: Date | null;
    code: string | null;
    name: string | null;
    category: string | null;
    tags: string | null;
    description: string | null;
    products: bigint | null;
    wishlists: bigint | null;
    products_occassionsToproducts: string | null;
    wishlists_occassionsTowishlists: string | null;
    _count: OccassionsCountAggregate | null;
    _avg: OccassionsAvgAggregate | null;
    _sum: OccassionsSumAggregate | null;
    _min: OccassionsMinAggregate | null;
    _max: OccassionsMaxAggregate | null;
}
