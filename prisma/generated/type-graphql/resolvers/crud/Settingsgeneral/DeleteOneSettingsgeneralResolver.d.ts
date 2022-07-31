import { GraphQLResolveInfo } from "graphql";
import { DeleteOneSettingsgeneralArgs } from "./args/DeleteOneSettingsgeneralArgs";
import { Settingsgeneral } from "../../../models/Settingsgeneral";
export declare class DeleteOneSettingsgeneralResolver {
    deleteOneSettingsgeneral(ctx: any, info: GraphQLResolveInfo, args: DeleteOneSettingsgeneralArgs): Promise<Settingsgeneral | null>;
}
