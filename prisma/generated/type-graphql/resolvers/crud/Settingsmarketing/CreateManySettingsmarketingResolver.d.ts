import { GraphQLResolveInfo } from "graphql";
import { CreateManySettingsmarketingArgs } from "./args/CreateManySettingsmarketingArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class CreateManySettingsmarketingResolver {
    createManySettingsmarketing(ctx: any, info: GraphQLResolveInfo, args: CreateManySettingsmarketingArgs): Promise<AffectedRowsOutput>;
}
