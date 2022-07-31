import { GraphQLResolveInfo } from "graphql";
import { FindUniqueSettingsmarketingArgs } from "./args/FindUniqueSettingsmarketingArgs";
import { Settingsmarketing } from "../../../models/Settingsmarketing";
export declare class FindUniqueSettingsmarketingResolver {
    settingsmarketing(ctx: any, info: GraphQLResolveInfo, args: FindUniqueSettingsmarketingArgs): Promise<Settingsmarketing | null>;
}
