import { GraphQLResolveInfo } from "graphql";
import { DeleteOneNewsletter_subscribersArgs } from "./args/DeleteOneNewsletter_subscribersArgs";
import { Newsletter_subscribers } from "../../../models/Newsletter_subscribers";
export declare class DeleteOneNewsletter_subscribersResolver {
    deleteOneNewsletter_subscribers(ctx: any, info: GraphQLResolveInfo, args: DeleteOneNewsletter_subscribersArgs): Promise<Newsletter_subscribers | null>;
}
