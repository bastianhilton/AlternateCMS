import { SettingsgeneralOrderByWithAggregationInput } from "../../../inputs/SettingsgeneralOrderByWithAggregationInput";
import { SettingsgeneralScalarWhereWithAggregatesInput } from "../../../inputs/SettingsgeneralScalarWhereWithAggregatesInput";
import { SettingsgeneralWhereInput } from "../../../inputs/SettingsgeneralWhereInput";
export declare class GroupBySettingsgeneralArgs {
    where?: SettingsgeneralWhereInput | undefined;
    orderBy?: SettingsgeneralOrderByWithAggregationInput[] | undefined;
    by: Array<"id" | "created_at" | "site_title" | "site_tagline" | "site_website" | "email" | "aws_s3" | "google_drive">;
    having?: SettingsgeneralScalarWhereWithAggregatesInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
