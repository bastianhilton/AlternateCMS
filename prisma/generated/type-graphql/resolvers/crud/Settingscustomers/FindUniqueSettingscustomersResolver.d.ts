import { GraphQLResolveInfo } from "graphql";
import { FindUniqueSettingscustomersArgs } from "./args/FindUniqueSettingscustomersArgs";
import { Settingscustomers } from "../../../models/Settingscustomers";
export declare class FindUniqueSettingscustomersResolver {
    findUniqueSettingscustomers(ctx: any, info: GraphQLResolveInfo, args: FindUniqueSettingscustomersArgs): Promise<Settingscustomers | null>;
}
