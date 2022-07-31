import { GraphQLResolveInfo } from "graphql";
import { UpsertOneOccassionsArgs } from "./args/UpsertOneOccassionsArgs";
import { Occassions } from "../../../models/Occassions";
export declare class UpsertOneOccassionsResolver {
    upsertOneOccassions(ctx: any, info: GraphQLResolveInfo, args: UpsertOneOccassionsArgs): Promise<Occassions>;
}
