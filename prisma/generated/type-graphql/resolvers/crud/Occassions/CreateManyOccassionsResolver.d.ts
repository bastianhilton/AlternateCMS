import { GraphQLResolveInfo } from "graphql";
import { CreateManyOccassionsArgs } from "./args/CreateManyOccassionsArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class CreateManyOccassionsResolver {
    createManyOccassions(ctx: any, info: GraphQLResolveInfo, args: CreateManyOccassionsArgs): Promise<AffectedRowsOutput>;
}
