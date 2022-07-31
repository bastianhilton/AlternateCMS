import { IntFilter } from "../inputs/IntFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
export declare class ArticlesWhereInput {
    AND?: ArticlesWhereInput[] | undefined;
    OR?: ArticlesWhereInput[] | undefined;
    NOT?: ArticlesWhereInput[] | undefined;
    id?: IntFilter | undefined;
    name?: StringFilter | undefined;
    excerpt?: StringFilter | undefined;
    content?: StringNullableFilter | undefined;
    image?: StringNullableFilter | undefined;
    categories?: StringNullableFilter | undefined;
    customers?: StringNullableFilter | undefined;
    users?: StringNullableFilter | undefined;
    published?: StringNullableFilter | undefined;
    cust_id?: IntFilter | undefined;
    isPublic?: StringNullableFilter | undefined;
    meta_description?: StringNullableFilter | undefined;
    meta_name?: StringNullableFilter | undefined;
    meta_url?: StringNullableFilter | undefined;
    tags?: StringNullableFilter | undefined;
}
