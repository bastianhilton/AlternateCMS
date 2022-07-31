import { SettingscustomersAvgAggregate } from "../outputs/SettingscustomersAvgAggregate";
import { SettingscustomersCountAggregate } from "../outputs/SettingscustomersCountAggregate";
import { SettingscustomersMaxAggregate } from "../outputs/SettingscustomersMaxAggregate";
import { SettingscustomersMinAggregate } from "../outputs/SettingscustomersMinAggregate";
import { SettingscustomersSumAggregate } from "../outputs/SettingscustomersSumAggregate";
export declare class AggregateSettingscustomers {
    _count: SettingscustomersCountAggregate | null;
    _avg: SettingscustomersAvgAggregate | null;
    _sum: SettingscustomersSumAggregate | null;
    _min: SettingscustomersMinAggregate | null;
    _max: SettingscustomersMaxAggregate | null;
}
