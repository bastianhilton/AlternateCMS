import { GraphQLResolveInfo } from "graphql";
import { DeleteOneSettingsmarketingArgs } from "./args/DeleteOneSettingsmarketingArgs";
import { Settingsmarketing } from "../../../models/Settingsmarketing";
export declare class DeleteOneSettingsmarketingResolver {
    deleteOneSettingsmarketing(ctx: any, info: GraphQLResolveInfo, args: DeleteOneSettingsmarketingArgs): Promise<Settingsmarketing | null>;
}
