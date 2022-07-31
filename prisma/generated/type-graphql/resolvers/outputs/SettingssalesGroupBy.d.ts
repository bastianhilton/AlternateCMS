import { SettingssalesAvgAggregate } from "../outputs/SettingssalesAvgAggregate";
import { SettingssalesCountAggregate } from "../outputs/SettingssalesCountAggregate";
import { SettingssalesMaxAggregate } from "../outputs/SettingssalesMaxAggregate";
import { SettingssalesMinAggregate } from "../outputs/SettingssalesMinAggregate";
import { SettingssalesSumAggregate } from "../outputs/SettingssalesSumAggregate";
export declare class SettingssalesGroupBy {
    id: bigint;
    created_at: Date | null;
    analytics_account_type: string | null;
    analytics_account_number: string | null;
    analytics_anonymizeip: string | null;
    analytics_content_experiments: string | null;
    adwords_conversionid: string | null;
    adwords_conversionlanguage: string | null;
    adwords_conversionformat: string | null;
    adwords_conversioncolor: string | null;
    adwords_conversionlabel: string | null;
    adwords_conversionvalue_type: string | null;
    adwords_sendorder: string | null;
    tag_manager_anonymizeip: string | null;
    tag_manager_contentexperiments: string | null;
    tag_manager_containerid: string | null;
    _count: SettingssalesCountAggregate | null;
    _avg: SettingssalesAvgAggregate | null;
    _sum: SettingssalesSumAggregate | null;
    _min: SettingssalesMinAggregate | null;
    _max: SettingssalesMaxAggregate | null;
}
