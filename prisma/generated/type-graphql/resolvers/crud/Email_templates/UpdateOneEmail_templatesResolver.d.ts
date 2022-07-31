import { GraphQLResolveInfo } from "graphql";
import { UpdateOneEmail_templatesArgs } from "./args/UpdateOneEmail_templatesArgs";
import { Email_templates } from "../../../models/Email_templates";
export declare class UpdateOneEmail_templatesResolver {
    updateOneEmail_templates(ctx: any, info: GraphQLResolveInfo, args: UpdateOneEmail_templatesArgs): Promise<Email_templates | null>;
}
