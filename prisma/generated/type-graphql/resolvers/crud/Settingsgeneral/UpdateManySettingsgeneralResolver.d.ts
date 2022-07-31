import { GraphQLResolveInfo } from "graphql";
import { UpdateManySettingsgeneralArgs } from "./args/UpdateManySettingsgeneralArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class UpdateManySettingsgeneralResolver {
    updateManySettingsgeneral(ctx: any, info: GraphQLResolveInfo, args: UpdateManySettingsgeneralArgs): Promise<AffectedRowsOutput>;
}
