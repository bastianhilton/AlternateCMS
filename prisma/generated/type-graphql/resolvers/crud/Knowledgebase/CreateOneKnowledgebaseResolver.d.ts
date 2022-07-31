import { GraphQLResolveInfo } from "graphql";
import { CreateOneKnowledgebaseArgs } from "./args/CreateOneKnowledgebaseArgs";
import { Knowledgebase } from "../../../models/Knowledgebase";
export declare class CreateOneKnowledgebaseResolver {
    createOneKnowledgebase(ctx: any, info: GraphQLResolveInfo, args: CreateOneKnowledgebaseArgs): Promise<Knowledgebase>;
}
