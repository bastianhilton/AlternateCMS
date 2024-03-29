import { AgreementsAvgAggregate } from "../outputs/AgreementsAvgAggregate";
import { AgreementsCountAggregate } from "../outputs/AgreementsCountAggregate";
import { AgreementsMaxAggregate } from "../outputs/AgreementsMaxAggregate";
import { AgreementsMinAggregate } from "../outputs/AgreementsMinAggregate";
import { AgreementsSumAggregate } from "../outputs/AgreementsSumAggregate";
export declare class AgreementsGroupBy {
    id: bigint;
    reference_id: number;
    created: Date | null;
    updated: Date | null;
    content: string | null;
    name: string | null;
    image: string | null;
    excerpt: string | null;
    type: string | null;
    user_id: number;
    shop_id: number;
    mediamanager: string | null;
    _count: AgreementsCountAggregate | null;
    _avg: AgreementsAvgAggregate | null;
    _sum: AgreementsSumAggregate | null;
    _min: AgreementsMinAggregate | null;
    _max: AgreementsMaxAggregate | null;
}
