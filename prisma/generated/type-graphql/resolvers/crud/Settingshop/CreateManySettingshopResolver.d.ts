import { GraphQLResolveInfo } from "graphql";
import { CreateManySettingshopArgs } from "./args/CreateManySettingshopArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class CreateManySettingshopResolver {
    createManySettingshop(ctx: any, info: GraphQLResolveInfo, args: CreateManySettingshopArgs): Promise<AffectedRowsOutput>;
}
