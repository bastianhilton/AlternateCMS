import { OccassionsAvgAggregate } from "../outputs/OccassionsAvgAggregate";
import { OccassionsCountAggregate } from "../outputs/OccassionsCountAggregate";
import { OccassionsMaxAggregate } from "../outputs/OccassionsMaxAggregate";
import { OccassionsMinAggregate } from "../outputs/OccassionsMinAggregate";
import { OccassionsSumAggregate } from "../outputs/OccassionsSumAggregate";
export declare class AggregateOccassions {
    _count: OccassionsCountAggregate | null;
    _avg: OccassionsAvgAggregate | null;
    _sum: OccassionsSumAggregate | null;
    _min: OccassionsMinAggregate | null;
    _max: OccassionsMaxAggregate | null;
}
