import { GraphQLResolveInfo } from "graphql";
import { UpsertOneShop_settingsArgs } from "./args/UpsertOneShop_settingsArgs";
import { Shop_settings } from "../../../models/Shop_settings";
export declare class UpsertOneShop_settingsResolver {
    upsertOneShop_settings(ctx: any, info: GraphQLResolveInfo, args: UpsertOneShop_settingsArgs): Promise<Shop_settings>;
}
