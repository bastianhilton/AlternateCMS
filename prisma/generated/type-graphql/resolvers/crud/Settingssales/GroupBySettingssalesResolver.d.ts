import { GraphQLResolveInfo } from "graphql";
import { GroupBySettingssalesArgs } from "./args/GroupBySettingssalesArgs";
import { SettingssalesGroupBy } from "../../outputs/SettingssalesGroupBy";
export declare class GroupBySettingssalesResolver {
    groupBySettingssales(ctx: any, info: GraphQLResolveInfo, args: GroupBySettingssalesArgs): Promise<SettingssalesGroupBy[]>;
}
