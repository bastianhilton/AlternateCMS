import { GraphQLResolveInfo } from "graphql";
import { UpdateOneSettingsgeneralArgs } from "./args/UpdateOneSettingsgeneralArgs";
import { Settingsgeneral } from "../../../models/Settingsgeneral";
export declare class UpdateOneSettingsgeneralResolver {
    updateOneSettingsgeneral(ctx: any, info: GraphQLResolveInfo, args: UpdateOneSettingsgeneralArgs): Promise<Settingsgeneral | null>;
}
