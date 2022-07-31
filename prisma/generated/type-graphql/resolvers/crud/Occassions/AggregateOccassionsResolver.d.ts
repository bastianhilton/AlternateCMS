import { GraphQLResolveInfo } from "graphql";
import { AggregateOccassionsArgs } from "./args/AggregateOccassionsArgs";
import { AggregateOccassions } from "../../outputs/AggregateOccassions";
export declare class AggregateOccassionsResolver {
    aggregateOccassions(ctx: any, info: GraphQLResolveInfo, args: AggregateOccassionsArgs): Promise<AggregateOccassions>;
}
