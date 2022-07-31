import { GraphQLResolveInfo } from "graphql";
import { UpdateOneShop_settingsArgs } from "./args/UpdateOneShop_settingsArgs";
import { Shop_settings } from "../../../models/Shop_settings";
export declare class UpdateOneShop_settingsResolver {
    updateOneShop_settings(ctx: any, info: GraphQLResolveInfo, args: UpdateOneShop_settingsArgs): Promise<Shop_settings | null>;
}
