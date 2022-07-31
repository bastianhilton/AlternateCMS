import { SettingsgeneralOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/SettingsgeneralOrderByWithRelationAndSearchRelevanceInput";
import { SettingsgeneralWhereInput } from "../../../inputs/SettingsgeneralWhereInput";
import { SettingsgeneralWhereUniqueInput } from "../../../inputs/SettingsgeneralWhereUniqueInput";
export declare class FindFirstSettingsgeneralArgs {
    where?: SettingsgeneralWhereInput | undefined;
    orderBy?: SettingsgeneralOrderByWithRelationAndSearchRelevanceInput[] | undefined;
    cursor?: SettingsgeneralWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
    distinct?: Array<"id" | "created_at" | "site_title" | "site_tagline" | "site_website" | "email" | "aws_s3" | "google_drive"> | undefined;
}
