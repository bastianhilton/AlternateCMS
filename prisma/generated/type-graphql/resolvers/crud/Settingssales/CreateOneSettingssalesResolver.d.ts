import { GraphQLResolveInfo } from "graphql";
import { CreateOneSettingssalesArgs } from "./args/CreateOneSettingssalesArgs";
import { Settingssales } from "../../../models/Settingssales";
export declare class CreateOneSettingssalesResolver {
    createOneSettingssales(ctx: any, info: GraphQLResolveInfo, args: CreateOneSettingssalesArgs): Promise<Settingssales>;
}
