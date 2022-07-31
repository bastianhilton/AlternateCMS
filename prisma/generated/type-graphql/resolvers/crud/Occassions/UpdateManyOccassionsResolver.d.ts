import { GraphQLResolveInfo } from "graphql";
import { UpdateManyOccassionsArgs } from "./args/UpdateManyOccassionsArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class UpdateManyOccassionsResolver {
    updateManyOccassions(ctx: any, info: GraphQLResolveInfo, args: UpdateManyOccassionsArgs): Promise<AffectedRowsOutput>;
}
