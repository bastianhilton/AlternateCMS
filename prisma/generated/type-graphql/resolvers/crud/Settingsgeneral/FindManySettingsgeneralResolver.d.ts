import { GraphQLResolveInfo } from "graphql";
import { FindManySettingsgeneralArgs } from "./args/FindManySettingsgeneralArgs";
import { Settingsgeneral } from "../../../models/Settingsgeneral";
export declare class FindManySettingsgeneralResolver {
    settingsgenerals(ctx: any, info: GraphQLResolveInfo, args: FindManySettingsgeneralArgs): Promise<Settingsgeneral[]>;
}
