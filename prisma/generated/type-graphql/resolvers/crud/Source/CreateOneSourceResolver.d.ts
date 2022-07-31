import { GraphQLResolveInfo } from "graphql";
import { CreateOneSourceArgs } from "./args/CreateOneSourceArgs";
import { Source } from "../../../models/Source";
export declare class CreateOneSourceResolver {
    createOneSource(ctx: any, info: GraphQLResolveInfo, args: CreateOneSourceArgs): Promise<Source>;
}
