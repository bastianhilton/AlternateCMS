import { GraphQLResolveInfo } from "graphql";
import { FindManySettingssalesArgs } from "./args/FindManySettingssalesArgs";
import { Settingssales } from "../../../models/Settingssales";
export declare class FindManySettingssalesResolver {
    findManySettingssales(ctx: any, info: GraphQLResolveInfo, args: FindManySettingssalesArgs): Promise<Settingssales[]>;
}
