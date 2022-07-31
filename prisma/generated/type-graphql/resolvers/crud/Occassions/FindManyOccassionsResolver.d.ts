import { GraphQLResolveInfo } from "graphql";
import { FindManyOccassionsArgs } from "./args/FindManyOccassionsArgs";
import { Occassions } from "../../../models/Occassions";
export declare class FindManyOccassionsResolver {
    findManyOccassions(ctx: any, info: GraphQLResolveInfo, args: FindManyOccassionsArgs): Promise<Occassions[]>;
}
