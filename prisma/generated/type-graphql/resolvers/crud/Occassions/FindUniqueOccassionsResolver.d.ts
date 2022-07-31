import { GraphQLResolveInfo } from "graphql";
import { FindUniqueOccassionsArgs } from "./args/FindUniqueOccassionsArgs";
import { Occassions } from "../../../models/Occassions";
export declare class FindUniqueOccassionsResolver {
    findUniqueOccassions(ctx: any, info: GraphQLResolveInfo, args: FindUniqueOccassionsArgs): Promise<Occassions | null>;
}
