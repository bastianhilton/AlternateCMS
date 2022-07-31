import { GraphQLResolveInfo } from "graphql";
import { CreateOneTasksArgs } from "./args/CreateOneTasksArgs";
import { Tasks } from "../../../models/Tasks";
export declare class CreateOneTasksResolver {
    createOneTasks(ctx: any, info: GraphQLResolveInfo, args: CreateOneTasksArgs): Promise<Tasks>;
}
