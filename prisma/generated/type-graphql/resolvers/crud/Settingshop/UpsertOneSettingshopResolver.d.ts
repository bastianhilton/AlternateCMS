import { GraphQLResolveInfo } from "graphql";
import { UpsertOneSettingshopArgs } from "./args/UpsertOneSettingshopArgs";
import { Settingshop } from "../../../models/Settingshop";
export declare class UpsertOneSettingshopResolver {
    upsertOneSettingshop(ctx: any, info: GraphQLResolveInfo, args: UpsertOneSettingshopArgs): Promise<Settingshop>;
}
