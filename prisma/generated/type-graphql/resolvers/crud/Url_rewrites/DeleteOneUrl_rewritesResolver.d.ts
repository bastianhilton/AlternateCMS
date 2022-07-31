import { GraphQLResolveInfo } from "graphql";
import { DeleteOneUrl_rewritesArgs } from "./args/DeleteOneUrl_rewritesArgs";
import { Url_rewrites } from "../../../models/Url_rewrites";
export declare class DeleteOneUrl_rewritesResolver {
    deleteOneUrl_rewrites(ctx: any, info: GraphQLResolveInfo, args: DeleteOneUrl_rewritesArgs): Promise<Url_rewrites | null>;
}
