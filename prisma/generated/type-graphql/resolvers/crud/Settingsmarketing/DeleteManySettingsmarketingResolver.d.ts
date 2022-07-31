import { GraphQLResolveInfo } from "graphql";
import { DeleteManySettingsmarketingArgs } from "./args/DeleteManySettingsmarketingArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class DeleteManySettingsmarketingResolver {
    deleteManySettingsmarketing(ctx: any, info: GraphQLResolveInfo, args: DeleteManySettingsmarketingArgs): Promise<AffectedRowsOutput>;
}
