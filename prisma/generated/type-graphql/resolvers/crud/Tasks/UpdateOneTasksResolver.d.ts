import { GraphQLResolveInfo } from "graphql";
import { UpdateOneTasksArgs } from "./args/UpdateOneTasksArgs";
import { Tasks } from "../../../models/Tasks";
export declare class UpdateOneTasksResolver {
    updateOneTasks(ctx: any, info: GraphQLResolveInfo, args: UpdateOneTasksArgs): Promise<Tasks | null>;
}
