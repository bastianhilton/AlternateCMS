import { GraphQLResolveInfo } from "graphql";
import { DeleteManySettingsgeneralArgs } from "./args/DeleteManySettingsgeneralArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class DeleteManySettingsgeneralResolver {
    deleteManySettingsgeneral(ctx: any, info: GraphQLResolveInfo, args: DeleteManySettingsgeneralArgs): Promise<AffectedRowsOutput>;
}
