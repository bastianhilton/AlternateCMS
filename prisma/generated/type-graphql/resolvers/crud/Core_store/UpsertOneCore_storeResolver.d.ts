import { GraphQLResolveInfo } from "graphql";
import { UpsertOneCore_storeArgs } from "./args/UpsertOneCore_storeArgs";
import { Core_store } from "../../../models/Core_store";
export declare class UpsertOneCore_storeResolver {
    upsertOneCore_store(ctx: any, info: GraphQLResolveInfo, args: UpsertOneCore_storeArgs): Promise<Core_store>;
}
