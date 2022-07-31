import { TasksOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/TasksOrderByWithRelationAndSearchRelevanceInput";
import { TasksWhereInput } from "../../../inputs/TasksWhereInput";
import { TasksWhereUniqueInput } from "../../../inputs/TasksWhereUniqueInput";
export declare class AggregateTasksArgs {
    where?: TasksWhereInput | undefined;
    orderBy?: TasksOrderByWithRelationAndSearchRelevanceInput[] | undefined;
    cursor?: TasksWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
