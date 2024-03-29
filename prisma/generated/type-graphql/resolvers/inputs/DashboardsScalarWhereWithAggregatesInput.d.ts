import { BigIntWithAggregatesFilter } from "../inputs/BigIntWithAggregatesFilter";
import { DateTimeNullableWithAggregatesFilter } from "../inputs/DateTimeNullableWithAggregatesFilter";
import { StringNullableWithAggregatesFilter } from "../inputs/StringNullableWithAggregatesFilter";
export declare class DashboardsScalarWhereWithAggregatesInput {
    AND?: DashboardsScalarWhereWithAggregatesInput[] | undefined;
    OR?: DashboardsScalarWhereWithAggregatesInput[] | undefined;
    NOT?: DashboardsScalarWhereWithAggregatesInput[] | undefined;
    id?: BigIntWithAggregatesFilter | undefined;
    created_at?: DateTimeNullableWithAggregatesFilter | undefined;
    name?: StringNullableWithAggregatesFilter | undefined;
    client_id?: StringNullableWithAggregatesFilter | undefined;
    client_secret?: StringNullableWithAggregatesFilter | undefined;
    privacy?: StringNullableWithAggregatesFilter | undefined;
    category?: StringNullableWithAggregatesFilter | undefined;
    url?: StringNullableWithAggregatesFilter | undefined;
    media?: StringNullableWithAggregatesFilter | undefined;
    task?: StringNullableWithAggregatesFilter | undefined;
    reports?: StringNullableWithAggregatesFilter | undefined;
    tasks?: StringNullableWithAggregatesFilter | undefined;
    projects?: StringNullableWithAggregatesFilter | undefined;
    tickets?: StringNullableWithAggregatesFilter | undefined;
    customers?: StringNullableWithAggregatesFilter | undefined;
    checklists?: StringNullableWithAggregatesFilter | undefined;
    visits?: StringNullableWithAggregatesFilter | undefined;
    users?: StringNullableWithAggregatesFilter | undefined;
    products?: StringNullableWithAggregatesFilter | undefined;
    articles?: StringNullableWithAggregatesFilter | undefined;
    sales?: StringNullableWithAggregatesFilter | undefined;
}
