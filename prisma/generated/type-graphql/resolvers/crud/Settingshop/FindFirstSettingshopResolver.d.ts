import { GraphQLResolveInfo } from "graphql";
import { FindFirstSettingshopArgs } from "./args/FindFirstSettingshopArgs";
import { Settingshop } from "../../../models/Settingshop";
export declare class FindFirstSettingshopResolver {
    findFirstSettingshop(ctx: any, info: GraphQLResolveInfo, args: FindFirstSettingshopArgs): Promise<Settingshop | null>;
}
