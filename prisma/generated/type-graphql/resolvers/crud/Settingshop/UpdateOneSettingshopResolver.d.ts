import { GraphQLResolveInfo } from "graphql";
import { UpdateOneSettingshopArgs } from "./args/UpdateOneSettingshopArgs";
import { Settingshop } from "../../../models/Settingshop";
export declare class UpdateOneSettingshopResolver {
    updateOneSettingshop(ctx: any, info: GraphQLResolveInfo, args: UpdateOneSettingshopArgs): Promise<Settingshop | null>;
}
