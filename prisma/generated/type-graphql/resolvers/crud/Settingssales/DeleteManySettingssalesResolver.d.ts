import { GraphQLResolveInfo } from "graphql";
import { DeleteManySettingssalesArgs } from "./args/DeleteManySettingssalesArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class DeleteManySettingssalesResolver {
    deleteManySettingssales(ctx: any, info: GraphQLResolveInfo, args: DeleteManySettingssalesArgs): Promise<AffectedRowsOutput>;
}
