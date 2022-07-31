import { GraphQLResolveInfo } from "graphql";
import { DeleteOneKnowledgebaseArgs } from "./args/DeleteOneKnowledgebaseArgs";
import { Knowledgebase } from "../../../models/Knowledgebase";
export declare class DeleteOneKnowledgebaseResolver {
    deleteOneKnowledgebase(ctx: any, info: GraphQLResolveInfo, args: DeleteOneKnowledgebaseArgs): Promise<Knowledgebase | null>;
}
