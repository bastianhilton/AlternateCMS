import { GraphQLResolveInfo } from "graphql";
import { UpsertOneUrl_rewritesArgs } from "./args/UpsertOneUrl_rewritesArgs";
import { Url_rewrites } from "../../../models/Url_rewrites";
export declare class UpsertOneUrl_rewritesResolver {
    upsertOneUrl_rewrites(ctx: any, info: GraphQLResolveInfo, args: UpsertOneUrl_rewritesArgs): Promise<Url_rewrites>;
}
