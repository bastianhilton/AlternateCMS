import { GraphQLResolveInfo } from "graphql";
import { DeleteOneShopsArgs } from "./args/DeleteOneShopsArgs";
import { Shops } from "../../../models/Shops";
export declare class DeleteOneShopsResolver {
    deleteOneShops(ctx: any, info: GraphQLResolveInfo, args: DeleteOneShopsArgs): Promise<Shops | null>;
}
