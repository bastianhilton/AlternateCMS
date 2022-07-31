import { GraphQLResolveInfo } from "graphql";
import { CreateOneGeneral_settingsArgs } from "./args/CreateOneGeneral_settingsArgs";
import { General_settings } from "../../../models/General_settings";
export declare class CreateOneGeneral_settingsResolver {
    createOneGeneral_settings(ctx: any, info: GraphQLResolveInfo, args: CreateOneGeneral_settingsArgs): Promise<General_settings>;
}
