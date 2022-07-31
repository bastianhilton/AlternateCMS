import { GraphQLResolveInfo } from "graphql";
import { DeleteOneSettingssalesArgs } from "./args/DeleteOneSettingssalesArgs";
import { Settingssales } from "../../../models/Settingssales";
export declare class DeleteOneSettingssalesResolver {
    deleteOneSettingssales(ctx: any, info: GraphQLResolveInfo, args: DeleteOneSettingssalesArgs): Promise<Settingssales | null>;
}
