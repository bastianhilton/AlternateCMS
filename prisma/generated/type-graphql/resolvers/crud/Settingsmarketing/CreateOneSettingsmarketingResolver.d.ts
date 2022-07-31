import { GraphQLResolveInfo } from "graphql";
import { CreateOneSettingsmarketingArgs } from "./args/CreateOneSettingsmarketingArgs";
import { Settingsmarketing } from "../../../models/Settingsmarketing";
export declare class CreateOneSettingsmarketingResolver {
    createOneSettingsmarketing(ctx: any, info: GraphQLResolveInfo, args: CreateOneSettingsmarketingArgs): Promise<Settingsmarketing>;
}
