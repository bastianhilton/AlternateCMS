import { GraphQLResolveInfo } from "graphql";
import { UpdateOneGeneral_settingsArgs } from "./args/UpdateOneGeneral_settingsArgs";
import { General_settings } from "../../../models/General_settings";
export declare class UpdateOneGeneral_settingsResolver {
    updateOneGeneral_settings(ctx: any, info: GraphQLResolveInfo, args: UpdateOneGeneral_settingsArgs): Promise<General_settings | null>;
}
