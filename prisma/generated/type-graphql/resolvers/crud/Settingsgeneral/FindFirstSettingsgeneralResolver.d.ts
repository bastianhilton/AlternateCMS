import { GraphQLResolveInfo } from "graphql";
import { FindFirstSettingsgeneralArgs } from "./args/FindFirstSettingsgeneralArgs";
import { Settingsgeneral } from "../../../models/Settingsgeneral";
export declare class FindFirstSettingsgeneralResolver {
    findFirstSettingsgeneral(ctx: any, info: GraphQLResolveInfo, args: FindFirstSettingsgeneralArgs): Promise<Settingsgeneral | null>;
}
