import { GraphQLResolveInfo } from "graphql";
import { UpsertOneGeneral_settingsArgs } from "./args/UpsertOneGeneral_settingsArgs";
import { General_settings } from "../../../models/General_settings";
export declare class UpsertOneGeneral_settingsResolver {
    upsertOneGeneral_settings(ctx: any, info: GraphQLResolveInfo, args: UpsertOneGeneral_settingsArgs): Promise<General_settings>;
}
