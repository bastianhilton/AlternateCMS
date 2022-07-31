import { GraphQLResolveInfo } from "graphql";
import { DeleteManySettingshopArgs } from "./args/DeleteManySettingshopArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class DeleteManySettingshopResolver {
    deleteManySettingshop(ctx: any, info: GraphQLResolveInfo, args: DeleteManySettingshopArgs): Promise<AffectedRowsOutput>;
}
