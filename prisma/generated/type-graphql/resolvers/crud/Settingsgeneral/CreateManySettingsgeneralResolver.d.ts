import { GraphQLResolveInfo } from "graphql";
import { CreateManySettingsgeneralArgs } from "./args/CreateManySettingsgeneralArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class CreateManySettingsgeneralResolver {
    createManySettingsgeneral(ctx: any, info: GraphQLResolveInfo, args: CreateManySettingsgeneralArgs): Promise<AffectedRowsOutput>;
}
