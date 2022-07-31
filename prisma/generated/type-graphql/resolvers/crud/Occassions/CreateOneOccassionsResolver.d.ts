import { GraphQLResolveInfo } from "graphql";
import { CreateOneOccassionsArgs } from "./args/CreateOneOccassionsArgs";
import { Occassions } from "../../../models/Occassions";
export declare class CreateOneOccassionsResolver {
    createOneOccassions(ctx: any, info: GraphQLResolveInfo, args: CreateOneOccassionsArgs): Promise<Occassions>;
}
