import { GraphQLResolveInfo } from "graphql";
import { CreateManySettingscustomersArgs } from "./args/CreateManySettingscustomersArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class CreateManySettingscustomersResolver {
    createManySettingscustomers(ctx: any, info: GraphQLResolveInfo, args: CreateManySettingscustomersArgs): Promise<AffectedRowsOutput>;
}
