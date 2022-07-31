import { GraphQLResolveInfo } from "graphql";
import { CreateOneCore_storeArgs } from "./args/CreateOneCore_storeArgs";
import { Core_store } from "../../../models/Core_store";
export declare class CreateOneCore_storeResolver {
    createOneCore_store(ctx: any, info: GraphQLResolveInfo, args: CreateOneCore_storeArgs): Promise<Core_store>;
}
