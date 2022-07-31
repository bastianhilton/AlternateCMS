import { ThemesOrderByRelevanceInput } from "../inputs/ThemesOrderByRelevanceInput";
import { WebsitesOrderByWithRelationAndSearchRelevanceInput } from "../inputs/WebsitesOrderByWithRelationAndSearchRelevanceInput";
export declare class ThemesOrderByWithRelationAndSearchRelevanceInput {
    id?: "asc" | "desc" | undefined;
    title?: "asc" | "desc" | undefined;
    parent_theme?: "asc" | "desc" | undefined;
    theme_path?: "asc" | "desc" | undefined;
    action?: "asc" | "desc" | undefined;
    website_id?: "asc" | "desc" | undefined;
    websites?: WebsitesOrderByWithRelationAndSearchRelevanceInput | undefined;
    _relevance?: ThemesOrderByRelevanceInput | undefined;
}
