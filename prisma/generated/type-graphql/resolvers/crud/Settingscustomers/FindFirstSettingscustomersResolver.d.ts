import { GraphQLResolveInfo } from "graphql";
import { FindFirstSettingscustomersArgs } from "./args/FindFirstSettingscustomersArgs";
import { Settingscustomers } from "../../../models/Settingscustomers";
export declare class FindFirstSettingscustomersResolver {
    findFirstSettingscustomers(ctx: any, info: GraphQLResolveInfo, args: FindFirstSettingscustomersArgs): Promise<Settingscustomers | null>;
}
