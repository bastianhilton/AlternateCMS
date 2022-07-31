import { GraphQLResolveInfo } from "graphql";
import { UpdateOneNewsletter_subscribersArgs } from "./args/UpdateOneNewsletter_subscribersArgs";
import { Newsletter_subscribers } from "../../../models/Newsletter_subscribers";
export declare class UpdateOneNewsletter_subscribersResolver {
    updateOneNewsletter_subscribers(ctx: any, info: GraphQLResolveInfo, args: UpdateOneNewsletter_subscribersArgs): Promise<Newsletter_subscribers | null>;
}
