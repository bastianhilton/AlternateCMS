import { BigIntFilter } from "../inputs/BigIntFilter";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
export declare class SettingsgeneralWhereInput {
    AND?: SettingsgeneralWhereInput[] | undefined;
    OR?: SettingsgeneralWhereInput[] | undefined;
    NOT?: SettingsgeneralWhereInput[] | undefined;
    id?: BigIntFilter | undefined;
    created_at?: DateTimeNullableFilter | undefined;
    site_title?: StringNullableFilter | undefined;
    site_tagline?: StringNullableFilter | undefined;
    site_website?: StringNullableFilter | undefined;
    email?: StringNullableFilter | undefined;
    aws_s3?: StringNullableFilter | undefined;
    google_drive?: StringNullableFilter | undefined;
}
