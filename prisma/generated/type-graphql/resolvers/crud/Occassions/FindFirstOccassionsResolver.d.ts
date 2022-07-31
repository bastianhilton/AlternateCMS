import { GraphQLResolveInfo } from "graphql";
import { FindFirstOccassionsArgs } from "./args/FindFirstOccassionsArgs";
import { Occassions } from "../../../models/Occassions";
export declare class FindFirstOccassionsResolver {
    findFirstOccassions(ctx: any, info: GraphQLResolveInfo, args: FindFirstOccassionsArgs): Promise<Occassions | null>;
}
