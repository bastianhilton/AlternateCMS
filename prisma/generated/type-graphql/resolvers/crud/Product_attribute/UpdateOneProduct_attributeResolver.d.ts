import { GraphQLResolveInfo } from "graphql";
import { UpdateOneProduct_attributeArgs } from "./args/UpdateOneProduct_attributeArgs";
import { Product_attribute } from "../../../models/Product_attribute";
export declare class UpdateOneProduct_attributeResolver {
    updateOneProduct_attribute(ctx: any, info: GraphQLResolveInfo, args: UpdateOneProduct_attributeArgs): Promise<Product_attribute | null>;
}
