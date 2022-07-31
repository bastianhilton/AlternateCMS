import { GraphQLResolveInfo } from "graphql";
import { UpdateOneCore_storeArgs } from "./args/UpdateOneCore_storeArgs";
import { Core_store } from "../../../models/Core_store";
export declare class UpdateOneCore_storeResolver {
    updateOneCore_store(ctx: any, info: GraphQLResolveInfo, args: UpdateOneCore_storeArgs): Promise<Core_store | null>;
}
