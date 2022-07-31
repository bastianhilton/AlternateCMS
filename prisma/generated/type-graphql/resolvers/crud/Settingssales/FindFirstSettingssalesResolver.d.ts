import { GraphQLResolveInfo } from "graphql";
import { FindFirstSettingssalesArgs } from "./args/FindFirstSettingssalesArgs";
import { Settingssales } from "../../../models/Settingssales";
export declare class FindFirstSettingssalesResolver {
    findFirstSettingssales(ctx: any, info: GraphQLResolveInfo, args: FindFirstSettingssalesArgs): Promise<Settingssales | null>;
}
