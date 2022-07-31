import { GraphQLResolveInfo } from "graphql";
import { UpdateOneSourceArgs } from "./args/UpdateOneSourceArgs";
import { Source } from "../../../models/Source";
export declare class UpdateOneSourceResolver {
    updateOneSource(ctx: any, info: GraphQLResolveInfo, args: UpdateOneSourceArgs): Promise<Source | null>;
}
