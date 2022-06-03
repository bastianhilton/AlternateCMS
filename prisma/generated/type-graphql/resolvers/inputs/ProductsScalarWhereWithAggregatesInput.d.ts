import { BigIntWithAggregatesFilter } from "../inputs/BigIntWithAggregatesFilter";
import { BoolNullableWithAggregatesFilter } from "../inputs/BoolNullableWithAggregatesFilter";
import { DateTimeNullableWithAggregatesFilter } from "../inputs/DateTimeNullableWithAggregatesFilter";
import { StringNullableWithAggregatesFilter } from "../inputs/StringNullableWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";
export declare class ProductsScalarWhereWithAggregatesInput {
    AND?: ProductsScalarWhereWithAggregatesInput[] | undefined;
    OR?: ProductsScalarWhereWithAggregatesInput[] | undefined;
    NOT?: ProductsScalarWhereWithAggregatesInput[] | undefined;
    id?: BigIntWithAggregatesFilter | undefined;
    sku?: BigIntWithAggregatesFilter | undefined;
    thumbnail?: StringNullableWithAggregatesFilter | undefined;
    name?: StringWithAggregatesFilter | undefined;
    type?: StringNullableWithAggregatesFilter | undefined;
    attribute_set?: StringNullableWithAggregatesFilter | undefined;
    price?: StringNullableWithAggregatesFilter | undefined;
    quantity_per_source?: StringNullableWithAggregatesFilter | undefined;
    salable_quantity?: StringNullableWithAggregatesFilter | undefined;
    visibility?: StringNullableWithAggregatesFilter | undefined;
    status?: BoolNullableWithAggregatesFilter | undefined;
    websites?: StringNullableWithAggregatesFilter | undefined;
    product?: StringNullableWithAggregatesFilter | undefined;
    tax_class?: StringNullableWithAggregatesFilter | undefined;
    stock_status?: StringNullableWithAggregatesFilter | undefined;
    weight?: StringNullableWithAggregatesFilter | undefined;
    categories?: StringNullableWithAggregatesFilter | undefined;
    created_at?: DateTimeNullableWithAggregatesFilter | undefined;
    country?: StringNullableWithAggregatesFilter | undefined;
    size?: StringNullableWithAggregatesFilter | undefined;
    format?: StringNullableWithAggregatesFilter | undefined;
    height?: StringNullableWithAggregatesFilter | undefined;
    content?: StringNullableWithAggregatesFilter | undefined;
    short_description?: StringNullableWithAggregatesFilter | undefined;
    image?: StringNullableWithAggregatesFilter | undefined;
    meta_title?: StringNullableWithAggregatesFilter | undefined;
    meta_keywords?: StringNullableWithAggregatesFilter | undefined;
    meta_description?: StringNullableWithAggregatesFilter | undefined;
    meta_url?: StringNullableWithAggregatesFilter | undefined;
    file?: StringNullableWithAggregatesFilter | undefined;
    manufacture?: StringNullableWithAggregatesFilter | undefined;
}