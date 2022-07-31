import { GraphQLResolveInfo } from "graphql";
import { CreateOneSettingscustomersArgs } from "./args/CreateOneSettingscustomersArgs";
import { Settingscustomers } from "../../../models/Settingscustomers";
export declare class CreateOneSettingscustomersResolver {
    createOneSettingscustomers(ctx: any, info: GraphQLResolveInfo, args: CreateOneSettingscustomersArgs): Promise<Settingscustomers>;
}
