import { GraphQLResolveInfo } from "graphql";
import { CreateOneUrl_rewritesArgs } from "./args/CreateOneUrl_rewritesArgs";
import { Url_rewrites } from "../../../models/Url_rewrites";
export declare class CreateOneUrl_rewritesResolver {
    createOneUrl_rewrites(ctx: any, info: GraphQLResolveInfo, args: CreateOneUrl_rewritesArgs): Promise<Url_rewrites>;
}
