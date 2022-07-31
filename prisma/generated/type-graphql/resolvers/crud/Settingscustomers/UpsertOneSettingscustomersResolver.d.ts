import { GraphQLResolveInfo } from "graphql";
import { UpsertOneSettingscustomersArgs } from "./args/UpsertOneSettingscustomersArgs";
import { Settingscustomers } from "../../../models/Settingscustomers";
export declare class UpsertOneSettingscustomersResolver {
    upsertOneSettingscustomers(ctx: any, info: GraphQLResolveInfo, args: UpsertOneSettingscustomersArgs): Promise<Settingscustomers>;
}
