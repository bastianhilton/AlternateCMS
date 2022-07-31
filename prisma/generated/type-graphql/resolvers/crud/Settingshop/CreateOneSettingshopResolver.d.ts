import { GraphQLResolveInfo } from "graphql";
import { CreateOneSettingshopArgs } from "./args/CreateOneSettingshopArgs";
import { Settingshop } from "../../../models/Settingshop";
export declare class CreateOneSettingshopResolver {
    createOneSettingshop(ctx: any, info: GraphQLResolveInfo, args: CreateOneSettingshopArgs): Promise<Settingshop>;
}
