import { GraphQLResolveInfo } from "graphql";
import { DeleteOneGeneral_settingsArgs } from "./args/DeleteOneGeneral_settingsArgs";
import { General_settings } from "../../../models/General_settings";
export declare class DeleteOneGeneral_settingsResolver {
    deleteOneGeneral_settings(ctx: any, info: GraphQLResolveInfo, args: DeleteOneGeneral_settingsArgs): Promise<General_settings | null>;
}
