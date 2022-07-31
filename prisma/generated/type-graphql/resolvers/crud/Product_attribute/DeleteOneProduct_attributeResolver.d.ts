import { GraphQLResolveInfo } from "graphql";
import { DeleteOneProduct_attributeArgs } from "./args/DeleteOneProduct_attributeArgs";
import { Product_attribute } from "../../../models/Product_attribute";
export declare class DeleteOneProduct_attributeResolver {
    deleteOneProduct_attribute(ctx: any, info: GraphQLResolveInfo, args: DeleteOneProduct_attributeArgs): Promise<Product_attribute | null>;
}
