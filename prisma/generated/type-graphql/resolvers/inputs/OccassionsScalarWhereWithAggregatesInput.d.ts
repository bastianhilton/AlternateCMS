import { BigIntNullableWithAggregatesFilter } from "../inputs/BigIntNullableWithAggregatesFilter";
import { BigIntWithAggregatesFilter } from "../inputs/BigIntWithAggregatesFilter";
import { DateTimeNullableWithAggregatesFilter } from "../inputs/DateTimeNullableWithAggregatesFilter";
import { StringNullableWithAggregatesFilter } from "../inputs/StringNullableWithAggregatesFilter";
export declare class OccassionsScalarWhereWithAggregatesInput {
    AND?: OccassionsScalarWhereWithAggregatesInput[] | undefined;
    OR?: OccassionsScalarWhereWithAggregatesInput[] | undefined;
    NOT?: OccassionsScalarWhereWithAggregatesInput[] | undefined;
    id?: BigIntWithAggregatesFilter | undefined;
    created_at?: DateTimeNullableWithAggregatesFilter | undefined;
    code?: StringNullableWithAggregatesFilter | undefined;
    name?: StringNullableWithAggregatesFilter | undefined;
    category?: StringNullableWithAggregatesFilter | undefined;
    tags?: StringNullableWithAggregatesFilter | undefined;
    description?: StringNullableWithAggregatesFilter | undefined;
    products?: BigIntNullableWithAggregatesFilter | undefined;
    wishlists?: BigIntNullableWithAggregatesFilter | undefined;
    products_occassionsToproducts?: StringNullableWithAggregatesFilter | undefined;
    wishlists_occassionsTowishlists?: StringNullableWithAggregatesFilter | undefined;
}
