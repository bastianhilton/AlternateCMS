import { GraphQLResolveInfo } from "graphql";
import { CreateOneProject_templatesArgs } from "./args/CreateOneProject_templatesArgs";
import { Project_templates } from "../../../models/Project_templates";
export declare class CreateOneProject_templatesResolver {
    createOneProject_templates(ctx: any, info: GraphQLResolveInfo, args: CreateOneProject_templatesArgs): Promise<Project_templates>;
}
