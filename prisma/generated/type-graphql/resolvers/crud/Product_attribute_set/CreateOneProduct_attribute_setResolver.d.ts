import { GraphQLResolveInfo } from "graphql";
import { CreateOneProduct_attribute_setArgs } from "./args/CreateOneProduct_attribute_setArgs";
import { Product_attribute_set } from "../../../models/Product_attribute_set";
export declare class CreateOneProduct_attribute_setResolver {
    createOneProduct_attribute_set(ctx: any, info: GraphQLResolveInfo, args: CreateOneProduct_attribute_setArgs): Promise<Product_attribute_set>;
}
