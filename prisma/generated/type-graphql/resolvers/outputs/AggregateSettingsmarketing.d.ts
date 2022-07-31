import { SettingsmarketingAvgAggregate } from "../outputs/SettingsmarketingAvgAggregate";
import { SettingsmarketingCountAggregate } from "../outputs/SettingsmarketingCountAggregate";
import { SettingsmarketingMaxAggregate } from "../outputs/SettingsmarketingMaxAggregate";
import { SettingsmarketingMinAggregate } from "../outputs/SettingsmarketingMinAggregate";
import { SettingsmarketingSumAggregate } from "../outputs/SettingsmarketingSumAggregate";
export declare class AggregateSettingsmarketing {
    _count: SettingsmarketingCountAggregate | null;
    _avg: SettingsmarketingAvgAggregate | null;
    _sum: SettingsmarketingSumAggregate | null;
    _min: SettingsmarketingMinAggregate | null;
    _max: SettingsmarketingMaxAggregate | null;
}
