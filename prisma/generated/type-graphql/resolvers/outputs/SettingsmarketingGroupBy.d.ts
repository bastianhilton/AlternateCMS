import { SettingsmarketingAvgAggregate } from "../outputs/SettingsmarketingAvgAggregate";
import { SettingsmarketingCountAggregate } from "../outputs/SettingsmarketingCountAggregate";
import { SettingsmarketingMaxAggregate } from "../outputs/SettingsmarketingMaxAggregate";
import { SettingsmarketingMinAggregate } from "../outputs/SettingsmarketingMinAggregate";
import { SettingsmarketingSumAggregate } from "../outputs/SettingsmarketingSumAggregate";
export declare class SettingsmarketingGroupBy {
    id: bigint;
    mail_port: string | null;
    recaptcha_api: string | null;
    adsense_api: string | null;
    sitemap_url: string | null;
    customer_data_lifetime: string | null;
    mail_server: string | null;
    _count: SettingsmarketingCountAggregate | null;
    _avg: SettingsmarketingAvgAggregate | null;
    _sum: SettingsmarketingSumAggregate | null;
    _min: SettingsmarketingMinAggregate | null;
    _max: SettingsmarketingMaxAggregate | null;
}
