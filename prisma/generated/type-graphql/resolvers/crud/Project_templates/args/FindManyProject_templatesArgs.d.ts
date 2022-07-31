import { Project_templatesOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/Project_templatesOrderByWithRelationAndSearchRelevanceInput";
import { Project_templatesWhereInput } from "../../../inputs/Project_templatesWhereInput";
import { Project_templatesWhereUniqueInput } from "../../../inputs/Project_templatesWhereUniqueInput";
export declare class FindManyProject_templatesArgs {
    where?: Project_templatesWhereInput | undefined;
    orderBy?: Project_templatesOrderByWithRelationAndSearchRelevanceInput[] | undefined;
    cursor?: Project_templatesWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
    distinct?: Array<"id" | "name" | "status" | "consider_working_days" | "priority" | "project_manager" | "resource" | "content"> | undefined;
}
