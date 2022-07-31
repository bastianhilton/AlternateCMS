import { GraphQLResolveInfo } from "graphql";
import { UpsertOneSettingsgeneralArgs } from "./args/UpsertOneSettingsgeneralArgs";
import { Settingsgeneral } from "../../../models/Settingsgeneral";
export declare class UpsertOneSettingsgeneralResolver {
    upsertOneSettingsgeneral(ctx: any, info: GraphQLResolveInfo, args: UpsertOneSettingsgeneralArgs): Promise<Settingsgeneral>;
}
