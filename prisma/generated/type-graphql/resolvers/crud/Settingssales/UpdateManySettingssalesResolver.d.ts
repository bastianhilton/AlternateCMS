import { GraphQLResolveInfo } from "graphql";
import { UpdateManySettingssalesArgs } from "./args/UpdateManySettingssalesArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class UpdateManySettingssalesResolver {
    updateManySettingssales(ctx: any, info: GraphQLResolveInfo, args: UpdateManySettingssalesArgs): Promise<AffectedRowsOutput>;
}
