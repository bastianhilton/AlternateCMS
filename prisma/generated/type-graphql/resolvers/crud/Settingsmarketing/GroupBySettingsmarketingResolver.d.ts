import { GraphQLResolveInfo } from "graphql";
import { GroupBySettingsmarketingArgs } from "./args/GroupBySettingsmarketingArgs";
import { SettingsmarketingGroupBy } from "../../outputs/SettingsmarketingGroupBy";
export declare class GroupBySettingsmarketingResolver {
    groupBySettingsmarketing(ctx: any, info: GraphQLResolveInfo, args: GroupBySettingsmarketingArgs): Promise<SettingsmarketingGroupBy[]>;
}
