import { GraphQLResolveInfo } from "graphql";
import { FindFirstSettingsmarketingArgs } from "./args/FindFirstSettingsmarketingArgs";
import { Settingsmarketing } from "../../../models/Settingsmarketing";
export declare class FindFirstSettingsmarketingResolver {
    findFirstSettingsmarketing(ctx: any, info: GraphQLResolveInfo, args: FindFirstSettingsmarketingArgs): Promise<Settingsmarketing | null>;
}
