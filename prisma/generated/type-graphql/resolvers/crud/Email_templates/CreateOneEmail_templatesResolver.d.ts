import { GraphQLResolveInfo } from "graphql";
import { CreateOneEmail_templatesArgs } from "./args/CreateOneEmail_templatesArgs";
import { Email_templates } from "../../../models/Email_templates";
export declare class CreateOneEmail_templatesResolver {
    createOneEmail_templates(ctx: any, info: GraphQLResolveInfo, args: CreateOneEmail_templatesArgs): Promise<Email_templates>;
}
