import { GraphQLResolveInfo } from "graphql";
import { FindManySettingshopArgs } from "./args/FindManySettingshopArgs";
import { Settingshop } from "../../../models/Settingshop";
export declare class FindManySettingshopResolver {
    settingshops(ctx: any, info: GraphQLResolveInfo, args: FindManySettingshopArgs): Promise<Settingshop[]>;
}
