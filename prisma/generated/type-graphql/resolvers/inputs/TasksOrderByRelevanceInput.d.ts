export declare class TasksOrderByRelevanceInput {
    fields: Array<"subject" | "start_date" | "due_date" | "priority" | "description" | "status" | "related_to" | "contact" | "assigned_to" | "mediamanager" | "projects" | "workspaces">;
    sort: "asc" | "desc";
    search: string;
}
