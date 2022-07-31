import { Project_templatesOrderByRelevanceInput } from "../inputs/Project_templatesOrderByRelevanceInput";
export declare class Project_templatesOrderByWithRelationAndSearchRelevanceInput {
    id?: "asc" | "desc" | undefined;
    name?: "asc" | "desc" | undefined;
    status?: "asc" | "desc" | undefined;
    consider_working_days?: "asc" | "desc" | undefined;
    priority?: "asc" | "desc" | undefined;
    project_manager?: "asc" | "desc" | undefined;
    resource?: "asc" | "desc" | undefined;
    content?: "asc" | "desc" | undefined;
    _relevance?: Project_templatesOrderByRelevanceInput | undefined;
}
