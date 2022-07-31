import { GraphQLResolveInfo } from "graphql";
import { UpsertOneEmail_templatesArgs } from "./args/UpsertOneEmail_templatesArgs";
import { Email_templates } from "../../../models/Email_templates";
export declare class UpsertOneEmail_templatesResolver {
    upsertOneEmail_templates(ctx: any, info: GraphQLResolveInfo, args: UpsertOneEmail_templatesArgs): Promise<Email_templates>;
}
