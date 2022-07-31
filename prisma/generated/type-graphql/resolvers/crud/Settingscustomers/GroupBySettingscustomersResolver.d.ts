import { GraphQLResolveInfo } from "graphql";
import { GroupBySettingscustomersArgs } from "./args/GroupBySettingscustomersArgs";
import { SettingscustomersGroupBy } from "../../outputs/SettingscustomersGroupBy";
export declare class GroupBySettingscustomersResolver {
    groupBySettingscustomers(ctx: any, info: GraphQLResolveInfo, args: GroupBySettingscustomersArgs): Promise<SettingscustomersGroupBy[]>;
}
