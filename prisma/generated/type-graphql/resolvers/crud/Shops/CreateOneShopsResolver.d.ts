import { GraphQLResolveInfo } from "graphql";
import { CreateOneShopsArgs } from "./args/CreateOneShopsArgs";
import { Shops } from "../../../models/Shops";
export declare class CreateOneShopsResolver {
    createOneShops(ctx: any, info: GraphQLResolveInfo, args: CreateOneShopsArgs): Promise<Shops>;
}
