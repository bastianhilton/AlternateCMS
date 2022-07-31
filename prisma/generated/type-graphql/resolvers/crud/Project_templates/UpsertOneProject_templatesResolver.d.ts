import { GraphQLResolveInfo } from "graphql";
import { UpsertOneProject_templatesArgs } from "./args/UpsertOneProject_templatesArgs";
import { Project_templates } from "../../../models/Project_templates";
export declare class UpsertOneProject_templatesResolver {
    upsertOneProject_templates(ctx: any, info: GraphQLResolveInfo, args: UpsertOneProject_templatesArgs): Promise<Project_templates>;
}
