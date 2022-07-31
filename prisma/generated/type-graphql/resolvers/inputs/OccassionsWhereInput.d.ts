import { BigIntFilter } from "../inputs/BigIntFilter";
import { BigIntNullableFilter } from "../inputs/BigIntNullableFilter";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
export declare class OccassionsWhereInput {
    AND?: OccassionsWhereInput[] | undefined;
    OR?: OccassionsWhereInput[] | undefined;
    NOT?: OccassionsWhereInput[] | undefined;
    id?: BigIntFilter | undefined;
    created_at?: DateTimeNullableFilter | undefined;
    code?: StringNullableFilter | undefined;
    name?: StringNullableFilter | undefined;
    category?: StringNullableFilter | undefined;
    tags?: StringNullableFilter | undefined;
    description?: StringNullableFilter | undefined;
    products?: BigIntNullableFilter | undefined;
    wishlists?: BigIntNullableFilter | undefined;
    products_occassionsToproducts?: StringNullableFilter | undefined;
    wishlists_occassionsTowishlists?: StringNullableFilter | undefined;
}
