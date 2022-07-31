import { GraphQLResolveInfo } from "graphql";
import { UpsertOneSettingsmarketingArgs } from "./args/UpsertOneSettingsmarketingArgs";
import { Settingsmarketing } from "../../../models/Settingsmarketing";
export declare class UpsertOneSettingsmarketingResolver {
    upsertOneSettingsmarketing(ctx: any, info: GraphQLResolveInfo, args: UpsertOneSettingsmarketingArgs): Promise<Settingsmarketing>;
}
