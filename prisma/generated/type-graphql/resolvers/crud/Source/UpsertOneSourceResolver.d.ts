import { GraphQLResolveInfo } from "graphql";
import { UpsertOneSourceArgs } from "./args/UpsertOneSourceArgs";
import { Source } from "../../../models/Source";
export declare class UpsertOneSourceResolver {
    upsertOneSource(ctx: any, info: GraphQLResolveInfo, args: UpsertOneSourceArgs): Promise<Source>;
}
