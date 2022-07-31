import { GraphQLResolveInfo } from "graphql";
import { DeleteOneProject_templatesArgs } from "./args/DeleteOneProject_templatesArgs";
import { Project_templates } from "../../../models/Project_templates";
export declare class DeleteOneProject_templatesResolver {
    deleteOneProject_templates(ctx: any, info: GraphQLResolveInfo, args: DeleteOneProject_templatesArgs): Promise<Project_templates | null>;
}
