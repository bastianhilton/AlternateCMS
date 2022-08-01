import { AnalyticsAvgOrderByAggregateInput } from "../inputs/AnalyticsAvgOrderByAggregateInput";
import { AnalyticsCountOrderByAggregateInput } from "../inputs/AnalyticsCountOrderByAggregateInput";
import { AnalyticsMaxOrderByAggregateInput } from "../inputs/AnalyticsMaxOrderByAggregateInput";
import { AnalyticsMinOrderByAggregateInput } from "../inputs/AnalyticsMinOrderByAggregateInput";
import { AnalyticsSumOrderByAggregateInput } from "../inputs/AnalyticsSumOrderByAggregateInput";
export declare class AnalyticsOrderByWithAggregationInput {
    id?: "asc" | "desc" | undefined;
    created_at?: "asc" | "desc" | undefined;
    name?: "asc" | "desc" | undefined;
    country?: "asc" | "desc" | undefined;
    share_data?: "asc" | "desc" | undefined;
    website_name?: "asc" | "desc" | undefined;
    client_id?: "asc" | "desc" | undefined;
    client_secret?: "asc" | "desc" | undefined;
    tracking_id?: "asc" | "desc" | undefined;
    property_name?: "asc" | "desc" | undefined;
    url?: "asc" | "desc" | undefined;
    default_view?: "asc" | "desc" | undefined;
    category?: "asc" | "desc" | undefined;
    property_hit?: "asc" | "desc" | undefined;
    tracking_code?: "asc" | "desc" | undefined;
    data_collection?: "asc" | "desc" | undefined;
    data_retention?: "asc" | "desc" | undefined;
    search_analytics?: "asc" | "desc" | undefined;
    _count?: AnalyticsCountOrderByAggregateInput | undefined;
    _avg?: AnalyticsAvgOrderByAggregateInput | undefined;
    _max?: AnalyticsMaxOrderByAggregateInput | undefined;
    _min?: AnalyticsMinOrderByAggregateInput | undefined;
    _sum?: AnalyticsSumOrderByAggregateInput | undefined;
}