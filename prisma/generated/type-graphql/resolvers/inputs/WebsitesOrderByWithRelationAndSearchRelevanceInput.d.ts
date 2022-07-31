import { ThemesOrderByRelationAggregateInput } from "../inputs/ThemesOrderByRelationAggregateInput";
import { WebsitesOrderByRelevanceInput } from "../inputs/WebsitesOrderByRelevanceInput";
export declare class WebsitesOrderByWithRelationAndSearchRelevanceInput {
    id?: "asc" | "desc" | undefined;
    created_at?: "asc" | "desc" | undefined;
    name?: "asc" | "desc" | undefined;
    url?: "asc" | "desc" | undefined;
    shop?: "asc" | "desc" | undefined;
    store?: "asc" | "desc" | undefined;
    themes?: ThemesOrderByRelationAggregateInput | undefined;
    _relevance?: WebsitesOrderByRelevanceInput | undefined;
}
