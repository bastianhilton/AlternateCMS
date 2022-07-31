import { GraphQLResolveInfo } from "graphql";
import { DeleteManyOccassionsArgs } from "./args/DeleteManyOccassionsArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class DeleteManyOccassionsResolver {
    deleteManyOccassions(ctx: any, info: GraphQLResolveInfo, args: DeleteManyOccassionsArgs): Promise<AffectedRowsOutput>;
}
