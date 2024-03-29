import { BigIntFilter } from "../inputs/BigIntFilter";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
export declare class DashboardsWhereInput {
    AND?: DashboardsWhereInput[] | undefined;
    OR?: DashboardsWhereInput[] | undefined;
    NOT?: DashboardsWhereInput[] | undefined;
    id?: BigIntFilter | undefined;
    created_at?: DateTimeNullableFilter | undefined;
    name?: StringNullableFilter | undefined;
    client_id?: StringNullableFilter | undefined;
    client_secret?: StringNullableFilter | undefined;
    privacy?: StringNullableFilter | undefined;
    category?: StringNullableFilter | undefined;
    url?: StringNullableFilter | undefined;
    media?: StringNullableFilter | undefined;
    task?: StringNullableFilter | undefined;
    reports?: StringNullableFilter | undefined;
    tasks?: StringNullableFilter | undefined;
    projects?: StringNullableFilter | undefined;
    tickets?: StringNullableFilter | undefined;
    customers?: StringNullableFilter | undefined;
    checklists?: StringNullableFilter | undefined;
    visits?: StringNullableFilter | undefined;
    users?: StringNullableFilter | undefined;
    products?: StringNullableFilter | undefined;
    articles?: StringNullableFilter | undefined;
    sales?: StringNullableFilter | undefined;
}
