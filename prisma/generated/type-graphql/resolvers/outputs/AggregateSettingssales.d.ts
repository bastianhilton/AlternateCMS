import { SettingssalesAvgAggregate } from "../outputs/SettingssalesAvgAggregate";
import { SettingssalesCountAggregate } from "../outputs/SettingssalesCountAggregate";
import { SettingssalesMaxAggregate } from "../outputs/SettingssalesMaxAggregate";
import { SettingssalesMinAggregate } from "../outputs/SettingssalesMinAggregate";
import { SettingssalesSumAggregate } from "../outputs/SettingssalesSumAggregate";
export declare class AggregateSettingssales {
    _count: SettingssalesCountAggregate | null;
    _avg: SettingssalesAvgAggregate | null;
    _sum: SettingssalesSumAggregate | null;
    _min: SettingssalesMinAggregate | null;
    _max: SettingssalesMaxAggregate | null;
}
