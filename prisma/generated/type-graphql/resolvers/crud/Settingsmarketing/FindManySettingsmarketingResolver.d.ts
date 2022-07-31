import { GraphQLResolveInfo } from "graphql";
import { FindManySettingsmarketingArgs } from "./args/FindManySettingsmarketingArgs";
import { Settingsmarketing } from "../../../models/Settingsmarketing";
export declare class FindManySettingsmarketingResolver {
    settingsmarketings(ctx: any, info: GraphQLResolveInfo, args: FindManySettingsmarketingArgs): Promise<Settingsmarketing[]>;
}
