import { GraphQLResolveInfo } from "graphql";
import { DeleteOneSettingscustomersArgs } from "./args/DeleteOneSettingscustomersArgs";
import { Settingscustomers } from "../../../models/Settingscustomers";
export declare class DeleteOneSettingscustomersResolver {
    deleteOneSettingscustomers(ctx: any, info: GraphQLResolveInfo, args: DeleteOneSettingscustomersArgs): Promise<Settingscustomers | null>;
}
