import { GraphQLResolveInfo } from "graphql";
import { DeleteOneShop_settingsArgs } from "./args/DeleteOneShop_settingsArgs";
import { Shop_settings } from "../../../models/Shop_settings";
export declare class DeleteOneShop_settingsResolver {
    deleteOneShop_settings(ctx: any, info: GraphQLResolveInfo, args: DeleteOneShop_settingsArgs): Promise<Shop_settings | null>;
}
