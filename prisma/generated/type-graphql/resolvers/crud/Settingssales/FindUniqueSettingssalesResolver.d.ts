import { GraphQLResolveInfo } from "graphql";
import { FindUniqueSettingssalesArgs } from "./args/FindUniqueSettingssalesArgs";
import { Settingssales } from "../../../models/Settingssales";
export declare class FindUniqueSettingssalesResolver {
    findUniqueSettingssales(ctx: any, info: GraphQLResolveInfo, args: FindUniqueSettingssalesArgs): Promise<Settingssales | null>;
}
