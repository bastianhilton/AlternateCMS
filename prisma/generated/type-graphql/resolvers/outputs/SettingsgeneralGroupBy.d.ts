import { SettingsgeneralAvgAggregate } from "../outputs/SettingsgeneralAvgAggregate";
import { SettingsgeneralCountAggregate } from "../outputs/SettingsgeneralCountAggregate";
import { SettingsgeneralMaxAggregate } from "../outputs/SettingsgeneralMaxAggregate";
import { SettingsgeneralMinAggregate } from "../outputs/SettingsgeneralMinAggregate";
import { SettingsgeneralSumAggregate } from "../outputs/SettingsgeneralSumAggregate";
export declare class SettingsgeneralGroupBy {
    id: bigint;
    created_at: Date | null;
    site_title: string | null;
    site_tagline: string | null;
    site_website: string | null;
    email: string | null;
    aws_s3: string | null;
    google_drive: string | null;
    _count: SettingsgeneralCountAggregate | null;
    _avg: SettingsgeneralAvgAggregate | null;
    _sum: SettingsgeneralSumAggregate | null;
    _min: SettingsgeneralMinAggregate | null;
    _max: SettingsgeneralMaxAggregate | null;
}
