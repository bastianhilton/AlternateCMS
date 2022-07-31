import { GraphQLResolveInfo } from "graphql";
import { UpdateOneUrl_rewritesArgs } from "./args/UpdateOneUrl_rewritesArgs";
import { Url_rewrites } from "../../../models/Url_rewrites";
export declare class UpdateOneUrl_rewritesResolver {
    updateOneUrl_rewrites(ctx: any, info: GraphQLResolveInfo, args: UpdateOneUrl_rewritesArgs): Promise<Url_rewrites | null>;
}
