import { GraphQLResolveInfo } from "graphql";
import { UpsertOneProduct_attributeArgs } from "./args/UpsertOneProduct_attributeArgs";
import { Product_attribute } from "../../../models/Product_attribute";
export declare class UpsertOneProduct_attributeResolver {
    upsertOneProduct_attribute(ctx: any, info: GraphQLResolveInfo, args: UpsertOneProduct_attributeArgs): Promise<Product_attribute>;
}
