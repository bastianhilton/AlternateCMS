import { GraphQLResolveInfo } from "graphql";
import { UpsertOneNewsletter_subscribersArgs } from "./args/UpsertOneNewsletter_subscribersArgs";
import { Newsletter_subscribers } from "../../../models/Newsletter_subscribers";
export declare class UpsertOneNewsletter_subscribersResolver {
    upsertOneNewsletter_subscribers(ctx: any, info: GraphQLResolveInfo, args: UpsertOneNewsletter_subscribersArgs): Promise<Newsletter_subscribers>;
}
