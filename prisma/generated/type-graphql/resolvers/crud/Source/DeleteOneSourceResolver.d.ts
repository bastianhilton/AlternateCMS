import { GraphQLResolveInfo } from "graphql";
import { DeleteOneSourceArgs } from "./args/DeleteOneSourceArgs";
import { Source } from "../../../models/Source";
export declare class DeleteOneSourceResolver {
    deleteOneSource(ctx: any, info: GraphQLResolveInfo, args: DeleteOneSourceArgs): Promise<Source | null>;
}
