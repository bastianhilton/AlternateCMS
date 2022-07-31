import { SettingsgeneralAvgAggregate } from "../outputs/SettingsgeneralAvgAggregate";
import { SettingsgeneralCountAggregate } from "../outputs/SettingsgeneralCountAggregate";
import { SettingsgeneralMaxAggregate } from "../outputs/SettingsgeneralMaxAggregate";
import { SettingsgeneralMinAggregate } from "../outputs/SettingsgeneralMinAggregate";
import { SettingsgeneralSumAggregate } from "../outputs/SettingsgeneralSumAggregate";
export declare class AggregateSettingsgeneral {
    _count: SettingsgeneralCountAggregate | null;
    _avg: SettingsgeneralAvgAggregate | null;
    _sum: SettingsgeneralSumAggregate | null;
    _min: SettingsgeneralMinAggregate | null;
    _max: SettingsgeneralMaxAggregate | null;
}
