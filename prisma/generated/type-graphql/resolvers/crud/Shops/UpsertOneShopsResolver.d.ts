import { GraphQLResolveInfo } from "graphql";
import { UpsertOneShopsArgs } from "./args/UpsertOneShopsArgs";
import { Shops } from "../../../models/Shops";
export declare class UpsertOneShopsResolver {
    upsertOneShops(ctx: any, info: GraphQLResolveInfo, args: UpsertOneShopsArgs): Promise<Shops>;
}
