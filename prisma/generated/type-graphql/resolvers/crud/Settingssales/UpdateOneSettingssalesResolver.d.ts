import { GraphQLResolveInfo } from "graphql";
import { UpdateOneSettingssalesArgs } from "./args/UpdateOneSettingssalesArgs";
import { Settingssales } from "../../../models/Settingssales";
export declare class UpdateOneSettingssalesResolver {
    updateOneSettingssales(ctx: any, info: GraphQLResolveInfo, args: UpdateOneSettingssalesArgs): Promise<Settingssales | null>;
}
