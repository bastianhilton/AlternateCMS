import { SettingsgeneralAvgOrderByAggregateInput } from "../inputs/SettingsgeneralAvgOrderByAggregateInput";
import { SettingsgeneralCountOrderByAggregateInput } from "../inputs/SettingsgeneralCountOrderByAggregateInput";
import { SettingsgeneralMaxOrderByAggregateInput } from "../inputs/SettingsgeneralMaxOrderByAggregateInput";
import { SettingsgeneralMinOrderByAggregateInput } from "../inputs/SettingsgeneralMinOrderByAggregateInput";
import { SettingsgeneralSumOrderByAggregateInput } from "../inputs/SettingsgeneralSumOrderByAggregateInput";
export declare class SettingsgeneralOrderByWithAggregationInput {
    id?: "asc" | "desc" | undefined;
    created_at?: "asc" | "desc" | undefined;
    site_title?: "asc" | "desc" | undefined;
    site_tagline?: "asc" | "desc" | undefined;
    site_website?: "asc" | "desc" | undefined;
    email?: "asc" | "desc" | undefined;
    aws_s3?: "asc" | "desc" | undefined;
    google_drive?: "asc" | "desc" | undefined;
    _count?: SettingsgeneralCountOrderByAggregateInput | undefined;
    _avg?: SettingsgeneralAvgOrderByAggregateInput | undefined;
    _max?: SettingsgeneralMaxOrderByAggregateInput | undefined;
    _min?: SettingsgeneralMinOrderByAggregateInput | undefined;
    _sum?: SettingsgeneralSumOrderByAggregateInput | undefined;
}
