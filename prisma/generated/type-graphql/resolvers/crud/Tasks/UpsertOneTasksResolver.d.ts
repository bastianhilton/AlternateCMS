import { GraphQLResolveInfo } from "graphql";
import { UpsertOneTasksArgs } from "./args/UpsertOneTasksArgs";
import { Tasks } from "../../../models/Tasks";
export declare class UpsertOneTasksResolver {
    upsertOneTasks(ctx: any, info: GraphQLResolveInfo, args: UpsertOneTasksArgs): Promise<Tasks>;
}
