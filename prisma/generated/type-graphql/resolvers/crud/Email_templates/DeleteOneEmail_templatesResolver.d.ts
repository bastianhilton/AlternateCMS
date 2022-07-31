import { GraphQLResolveInfo } from "graphql";
import { DeleteOneEmail_templatesArgs } from "./args/DeleteOneEmail_templatesArgs";
import { Email_templates } from "../../../models/Email_templates";
export declare class DeleteOneEmail_templatesResolver {
    deleteOneEmail_templates(ctx: any, info: GraphQLResolveInfo, args: DeleteOneEmail_templatesArgs): Promise<Email_templates | null>;
}
