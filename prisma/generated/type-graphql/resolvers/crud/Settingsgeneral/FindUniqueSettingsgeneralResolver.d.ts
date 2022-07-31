import { GraphQLResolveInfo } from "graphql";
import { FindUniqueSettingsgeneralArgs } from "./args/FindUniqueSettingsgeneralArgs";
import { Settingsgeneral } from "../../../models/Settingsgeneral";
export declare class FindUniqueSettingsgeneralResolver {
    settingsgeneral(ctx: any, info: GraphQLResolveInfo, args: FindUniqueSettingsgeneralArgs): Promise<Settingsgeneral | null>;
}
