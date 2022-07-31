import { GraphQLResolveInfo } from "graphql";
import { UpdateOneSettingscustomersArgs } from "./args/UpdateOneSettingscustomersArgs";
import { Settingscustomers } from "../../../models/Settingscustomers";
export declare class UpdateOneSettingscustomersResolver {
    updateOneSettingscustomers(ctx: any, info: GraphQLResolveInfo, args: UpdateOneSettingscustomersArgs): Promise<Settingscustomers | null>;
}
