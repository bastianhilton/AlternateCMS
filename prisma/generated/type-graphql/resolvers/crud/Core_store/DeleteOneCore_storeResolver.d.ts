import { GraphQLResolveInfo } from "graphql";
import { DeleteOneCore_storeArgs } from "./args/DeleteOneCore_storeArgs";
import { Core_store } from "../../../models/Core_store";
export declare class DeleteOneCore_storeResolver {
    deleteOneCore_store(ctx: any, info: GraphQLResolveInfo, args: DeleteOneCore_storeArgs): Promise<Core_store | null>;
}
