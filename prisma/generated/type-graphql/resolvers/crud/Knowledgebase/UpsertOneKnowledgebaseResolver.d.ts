import { GraphQLResolveInfo } from "graphql";
import { UpsertOneKnowledgebaseArgs } from "./args/UpsertOneKnowledgebaseArgs";
import { Knowledgebase } from "../../../models/Knowledgebase";
export declare class UpsertOneKnowledgebaseResolver {
    upsertOneKnowledgebase(ctx: any, info: GraphQLResolveInfo, args: UpsertOneKnowledgebaseArgs): Promise<Knowledgebase>;
}
