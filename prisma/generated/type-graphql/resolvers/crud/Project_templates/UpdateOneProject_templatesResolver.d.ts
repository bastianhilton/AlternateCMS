import { GraphQLResolveInfo } from "graphql";
import { UpdateOneProject_templatesArgs } from "./args/UpdateOneProject_templatesArgs";
import { Project_templates } from "../../../models/Project_templates";
export declare class UpdateOneProject_templatesResolver {
    updateOneProject_templates(ctx: any, info: GraphQLResolveInfo, args: UpdateOneProject_templatesArgs): Promise<Project_templates | null>;
}
