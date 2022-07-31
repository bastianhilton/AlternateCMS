import { GraphQLResolveInfo } from "graphql";
import { CreateOneNewsletter_subscribersArgs } from "./args/CreateOneNewsletter_subscribersArgs";
import { Newsletter_subscribers } from "../../../models/Newsletter_subscribers";
export declare class CreateOneNewsletter_subscribersResolver {
    createOneNewsletter_subscribers(ctx: any, info: GraphQLResolveInfo, args: CreateOneNewsletter_subscribersArgs): Promise<Newsletter_subscribers>;
}
