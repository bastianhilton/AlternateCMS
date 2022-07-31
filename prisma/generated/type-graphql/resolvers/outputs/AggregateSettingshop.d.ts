import { SettingshopAvgAggregate } from "../outputs/SettingshopAvgAggregate";
import { SettingshopCountAggregate } from "../outputs/SettingshopCountAggregate";
import { SettingshopMaxAggregate } from "../outputs/SettingshopMaxAggregate";
import { SettingshopMinAggregate } from "../outputs/SettingshopMinAggregate";
import { SettingshopSumAggregate } from "../outputs/SettingshopSumAggregate";
export declare class AggregateSettingshop {
    _count: SettingshopCountAggregate | null;
    _avg: SettingshopAvgAggregate | null;
    _sum: SettingshopSumAggregate | null;
    _min: SettingshopMinAggregate | null;
    _max: SettingshopMaxAggregate | null;
}
