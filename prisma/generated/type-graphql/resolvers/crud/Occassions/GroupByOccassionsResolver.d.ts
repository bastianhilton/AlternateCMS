import { GraphQLResolveInfo } from "graphql";
import { GroupByOccassionsArgs } from "./args/GroupByOccassionsArgs";
import { OccassionsGroupBy } from "../../outputs/OccassionsGroupBy";
export declare class GroupByOccassionsResolver {
    groupByOccassions(ctx: any, info: GraphQLResolveInfo, args: GroupByOccassionsArgs): Promise<OccassionsGroupBy[]>;
}
