import { GraphQLResolveInfo } from "graphql";
import { CreateOneShop_settingsArgs } from "./args/CreateOneShop_settingsArgs";
import { Shop_settings } from "../../../models/Shop_settings";
export declare class CreateOneShop_settingsResolver {
    createOneShop_settings(ctx: any, info: GraphQLResolveInfo, args: CreateOneShop_settingsArgs): Promise<Shop_settings>;
}
