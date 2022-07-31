import { GraphQLResolveInfo } from "graphql";
import { FindManySettingscustomersArgs } from "./args/FindManySettingscustomersArgs";
import { Settingscustomers } from "../../../models/Settingscustomers";
export declare class FindManySettingscustomersResolver {
    findManySettingscustomers(ctx: any, info: GraphQLResolveInfo, args: FindManySettingscustomersArgs): Promise<Settingscustomers[]>;
}
