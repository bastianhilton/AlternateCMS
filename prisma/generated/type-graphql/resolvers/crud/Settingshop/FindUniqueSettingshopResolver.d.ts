import { GraphQLResolveInfo } from "graphql";
import { FindUniqueSettingshopArgs } from "./args/FindUniqueSettingshopArgs";
import { Settingshop } from "../../../models/Settingshop";
export declare class FindUniqueSettingshopResolver {
    settingshop(ctx: any, info: GraphQLResolveInfo, args: FindUniqueSettingshopArgs): Promise<Settingshop | null>;
}
