import { GraphQLResolveInfo } from "graphql";
import { UpdateManySettingsmarketingArgs } from "./args/UpdateManySettingsmarketingArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class UpdateManySettingsmarketingResolver {
    updateManySettingsmarketing(ctx: any, info: GraphQLResolveInfo, args: UpdateManySettingsmarketingArgs): Promise<AffectedRowsOutput>;
}
