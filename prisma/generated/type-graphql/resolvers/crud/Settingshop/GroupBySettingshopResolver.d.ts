import { GraphQLResolveInfo } from "graphql";
import { GroupBySettingshopArgs } from "./args/GroupBySettingshopArgs";
import { SettingshopGroupBy } from "../../outputs/SettingshopGroupBy";
export declare class GroupBySettingshopResolver {
    groupBySettingshop(ctx: any, info: GraphQLResolveInfo, args: GroupBySettingshopArgs): Promise<SettingshopGroupBy[]>;
}
