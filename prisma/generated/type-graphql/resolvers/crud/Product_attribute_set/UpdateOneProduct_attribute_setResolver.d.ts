import { GraphQLResolveInfo } from "graphql";
import { UpdateOneProduct_attribute_setArgs } from "./args/UpdateOneProduct_attribute_setArgs";
import { Product_attribute_set } from "../../../models/Product_attribute_set";
export declare class UpdateOneProduct_attribute_setResolver {
    updateOneProduct_attribute_set(ctx: any, info: GraphQLResolveInfo, args: UpdateOneProduct_attribute_setArgs): Promise<Product_attribute_set | null>;
}
