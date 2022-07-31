import { GraphQLResolveInfo } from "graphql";
import { DeleteOneOccassionsArgs } from "./args/DeleteOneOccassionsArgs";
import { Occassions } from "../../../models/Occassions";
export declare class DeleteOneOccassionsResolver {
    deleteOneOccassions(ctx: any, info: GraphQLResolveInfo, args: DeleteOneOccassionsArgs): Promise<Occassions | null>;
}
