import { BigIntWithAggregatesFilter } from "../inputs/BigIntWithAggregatesFilter";
import { DateTimeNullableWithAggregatesFilter } from "../inputs/DateTimeNullableWithAggregatesFilter";
import { StringNullableWithAggregatesFilter } from "../inputs/StringNullableWithAggregatesFilter";
export declare class SettingsgeneralScalarWhereWithAggregatesInput {
    AND?: SettingsgeneralScalarWhereWithAggregatesInput[] | undefined;
    OR?: SettingsgeneralScalarWhereWithAggregatesInput[] | undefined;
    NOT?: SettingsgeneralScalarWhereWithAggregatesInput[] | undefined;
    id?: BigIntWithAggregatesFilter | undefined;
    created_at?: DateTimeNullableWithAggregatesFilter | undefined;
    site_title?: StringNullableWithAggregatesFilter | undefined;
    site_tagline?: StringNullableWithAggregatesFilter | undefined;
    site_website?: StringNullableWithAggregatesFilter | undefined;
    email?: StringNullableWithAggregatesFilter | undefined;
    aws_s3?: StringNullableWithAggregatesFilter | undefined;
    google_drive?: StringNullableWithAggregatesFilter | undefined;
}
