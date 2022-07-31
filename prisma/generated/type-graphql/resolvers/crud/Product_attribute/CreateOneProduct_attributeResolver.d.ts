import { GraphQLResolveInfo } from "graphql";
import { CreateOneProduct_attributeArgs } from "./args/CreateOneProduct_attributeArgs";
import { Product_attribute } from "../../../models/Product_attribute";
export declare class CreateOneProduct_attributeResolver {
    createOneProduct_attribute(ctx: any, info: GraphQLResolveInfo, args: CreateOneProduct_attributeArgs): Promise<Product_attribute>;
}
