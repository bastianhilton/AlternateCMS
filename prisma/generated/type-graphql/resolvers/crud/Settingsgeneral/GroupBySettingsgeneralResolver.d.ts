import { GraphQLResolveInfo } from "graphql";
import { GroupBySettingsgeneralArgs } from "./args/GroupBySettingsgeneralArgs";
import { SettingsgeneralGroupBy } from "../../outputs/SettingsgeneralGroupBy";
export declare class GroupBySettingsgeneralResolver {
    groupBySettingsgeneral(ctx: any, info: GraphQLResolveInfo, args: GroupBySettingsgeneralArgs): Promise<SettingsgeneralGroupBy[]>;
}
