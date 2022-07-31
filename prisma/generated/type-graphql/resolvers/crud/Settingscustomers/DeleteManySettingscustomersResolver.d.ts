import { GraphQLResolveInfo } from "graphql";
import { DeleteManySettingscustomersArgs } from "./args/DeleteManySettingscustomersArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class DeleteManySettingscustomersResolver {
    deleteManySettingscustomers(ctx: any, info: GraphQLResolveInfo, args: DeleteManySettingscustomersArgs): Promise<AffectedRowsOutput>;
}
