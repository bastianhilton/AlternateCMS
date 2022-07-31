import { GraphQLResolveInfo } from "graphql";
import { UpdateOneShopsArgs } from "./args/UpdateOneShopsArgs";
import { Shops } from "../../../models/Shops";
export declare class UpdateOneShopsResolver {
    updateOneShops(ctx: any, info: GraphQLResolveInfo, args: UpdateOneShopsArgs): Promise<Shops | null>;
}
