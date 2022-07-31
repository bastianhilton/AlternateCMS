import { GraphQLResolveInfo } from "graphql";
import { CreateManySettingssalesArgs } from "./args/CreateManySettingssalesArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class CreateManySettingssalesResolver {
    createManySettingssales(ctx: any, info: GraphQLResolveInfo, args: CreateManySettingssalesArgs): Promise<AffectedRowsOutput>;
}
