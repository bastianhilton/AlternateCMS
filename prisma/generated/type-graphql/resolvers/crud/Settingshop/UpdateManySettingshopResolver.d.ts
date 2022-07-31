import { GraphQLResolveInfo } from "graphql";
import { UpdateManySettingshopArgs } from "./args/UpdateManySettingshopArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class UpdateManySettingshopResolver {
    updateManySettingshop(ctx: any, info: GraphQLResolveInfo, args: UpdateManySettingshopArgs): Promise<AffectedRowsOutput>;
}
