import { GraphQLResolveInfo } from "graphql";
import { UpdateManySettingscustomersArgs } from "./args/UpdateManySettingscustomersArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class UpdateManySettingscustomersResolver {
    updateManySettingscustomers(ctx: any, info: GraphQLResolveInfo, args: UpdateManySettingscustomersArgs): Promise<AffectedRowsOutput>;
}
