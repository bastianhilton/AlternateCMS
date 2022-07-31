import { GraphQLResolveInfo } from "graphql";
import { DeleteOneTasksArgs } from "./args/DeleteOneTasksArgs";
import { Tasks } from "../../../models/Tasks";
export declare class DeleteOneTasksResolver {
    deleteOneTasks(ctx: any, info: GraphQLResolveInfo, args: DeleteOneTasksArgs): Promise<Tasks | null>;
}
