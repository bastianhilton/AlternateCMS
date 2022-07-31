import { SettingscustomersAvgAggregate } from "../outputs/SettingscustomersAvgAggregate";
import { SettingscustomersCountAggregate } from "../outputs/SettingscustomersCountAggregate";
import { SettingscustomersMaxAggregate } from "../outputs/SettingscustomersMaxAggregate";
import { SettingscustomersMinAggregate } from "../outputs/SettingscustomersMinAggregate";
import { SettingscustomersSumAggregate } from "../outputs/SettingscustomersSumAggregate";
export declare class SettingscustomersGroupBy {
    id: bigint;
    created_at: Date | null;
    login_as_customer: string | null;
    share_customer_accounts: string | null;
    online_minutes_interval: string | null;
    customer_data_lifetime: string | null;
    email_after_registration: string | null;
    _count: SettingscustomersCountAggregate | null;
    _avg: SettingscustomersAvgAggregate | null;
    _sum: SettingscustomersSumAggregate | null;
    _min: SettingscustomersMinAggregate | null;
    _max: SettingscustomersMaxAggregate | null;
}
