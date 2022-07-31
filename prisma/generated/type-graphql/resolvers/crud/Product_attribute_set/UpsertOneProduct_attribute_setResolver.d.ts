import { GraphQLResolveInfo } from "graphql";
import { UpsertOneProduct_attribute_setArgs } from "./args/UpsertOneProduct_attribute_setArgs";
import { Product_attribute_set } from "../../../models/Product_attribute_set";
export declare class UpsertOneProduct_attribute_setResolver {
    upsertOneProduct_attribute_set(ctx: any, info: GraphQLResolveInfo, args: UpsertOneProduct_attribute_setArgs): Promise<Product_attribute_set>;
}
