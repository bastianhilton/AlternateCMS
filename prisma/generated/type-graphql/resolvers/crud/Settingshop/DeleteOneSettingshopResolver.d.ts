import { GraphQLResolveInfo } from "graphql";
import { DeleteOneSettingshopArgs } from "./args/DeleteOneSettingshopArgs";
import { Settingshop } from "../../../models/Settingshop";
export declare class DeleteOneSettingshopResolver {
    deleteOneSettingshop(ctx: any, info: GraphQLResolveInfo, args: DeleteOneSettingshopArgs): Promise<Settingshop | null>;
}
