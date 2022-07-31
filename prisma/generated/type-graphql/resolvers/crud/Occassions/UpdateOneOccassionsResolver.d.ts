import { GraphQLResolveInfo } from "graphql";
import { UpdateOneOccassionsArgs } from "./args/UpdateOneOccassionsArgs";
import { Occassions } from "../../../models/Occassions";
export declare class UpdateOneOccassionsResolver {
    updateOneOccassions(ctx: any, info: GraphQLResolveInfo, args: UpdateOneOccassionsArgs): Promise<Occassions | null>;
}
