import { GraphQLResolveInfo } from "graphql";
import { UpsertOneSettingssalesArgs } from "./args/UpsertOneSettingssalesArgs";
import { Settingssales } from "../../../models/Settingssales";
export declare class UpsertOneSettingssalesResolver {
    upsertOneSettingssales(ctx: any, info: GraphQLResolveInfo, args: UpsertOneSettingssalesArgs): Promise<Settingssales>;
}
