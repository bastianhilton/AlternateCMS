import { DashboardsAvgOrderByAggregateInput } from "../inputs/DashboardsAvgOrderByAggregateInput";
import { DashboardsCountOrderByAggregateInput } from "../inputs/DashboardsCountOrderByAggregateInput";
import { DashboardsMaxOrderByAggregateInput } from "../inputs/DashboardsMaxOrderByAggregateInput";
import { DashboardsMinOrderByAggregateInput } from "../inputs/DashboardsMinOrderByAggregateInput";
import { DashboardsSumOrderByAggregateInput } from "../inputs/DashboardsSumOrderByAggregateInput";
export declare class DashboardsOrderByWithAggregationInput {
    id?: "asc" | "desc" | undefined;
    created_at?: "asc" | "desc" | undefined;
    name?: "asc" | "desc" | undefined;
    client_id?: "asc" | "desc" | undefined;
    client_secret?: "asc" | "desc" | undefined;
    privacy?: "asc" | "desc" | undefined;
    category?: "asc" | "desc" | undefined;
    url?: "asc" | "desc" | undefined;
    media?: "asc" | "desc" | undefined;
    task?: "asc" | "desc" | undefined;
    reports?: "asc" | "desc" | undefined;
    tasks?: "asc" | "desc" | undefined;
    projects?: "asc" | "desc" | undefined;
    tickets?: "asc" | "desc" | undefined;
    customers?: "asc" | "desc" | undefined;
    checklists?: "asc" | "desc" | undefined;
    visits?: "asc" | "desc" | undefined;
    users?: "asc" | "desc" | undefined;
    products?: "asc" | "desc" | undefined;
    articles?: "asc" | "desc" | undefined;
    sales?: "asc" | "desc" | undefined;
    _count?: DashboardsCountOrderByAggregateInput | undefined;
    _avg?: DashboardsAvgOrderByAggregateInput | undefined;
    _max?: DashboardsMaxOrderByAggregateInput | undefined;
    _min?: DashboardsMinOrderByAggregateInput | undefined;
    _sum?: DashboardsSumOrderByAggregateInput | undefined;
}