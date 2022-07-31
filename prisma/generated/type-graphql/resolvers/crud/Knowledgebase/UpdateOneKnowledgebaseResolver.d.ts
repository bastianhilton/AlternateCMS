import { GraphQLResolveInfo } from "graphql";
import { UpdateOneKnowledgebaseArgs } from "./args/UpdateOneKnowledgebaseArgs";
import { Knowledgebase } from "../../../models/Knowledgebase";
export declare class UpdateOneKnowledgebaseResolver {
    updateOneKnowledgebase(ctx: any, info: GraphQLResolveInfo, args: UpdateOneKnowledgebaseArgs): Promise<Knowledgebase | null>;
}
