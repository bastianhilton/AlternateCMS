import { GraphQLResolveInfo } from "graphql";
import { DeleteOneProduct_attribute_setArgs } from "./args/DeleteOneProduct_attribute_setArgs";
import { Product_attribute_set } from "../../../models/Product_attribute_set";
export declare class DeleteOneProduct_attribute_setResolver {
    deleteOneProduct_attribute_set(ctx: any, info: GraphQLResolveInfo, args: DeleteOneProduct_attribute_setArgs): Promise<Product_attribute_set | null>;
}
