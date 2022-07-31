import { GraphQLResolveInfo } from "graphql";
import { UpdateOneSettingsmarketingArgs } from "./args/UpdateOneSettingsmarketingArgs";
import { Settingsmarketing } from "../../../models/Settingsmarketing";
export declare class UpdateOneSettingsmarketingResolver {
    updateOneSettingsmarketing(ctx: any, info: GraphQLResolveInfo, args: UpdateOneSettingsmarketingArgs): Promise<Settingsmarketing | null>;
}
