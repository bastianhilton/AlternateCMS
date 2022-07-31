import { GraphQLResolveInfo } from "graphql";
import { CreateOneSettingsgeneralArgs } from "./args/CreateOneSettingsgeneralArgs";
import { Settingsgeneral } from "../../../models/Settingsgeneral";
export declare class CreateOneSettingsgeneralResolver {
    createOneSettingsgeneral(ctx: any, info: GraphQLResolveInfo, args: CreateOneSettingsgeneralArgs): Promise<Settingsgeneral>;
}
