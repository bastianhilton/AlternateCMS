import { BigIntFilter } from "../inputs/BigIntFilter";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
export declare class EventsWhereInput {
    AND?: EventsWhereInput[] | undefined;
    OR?: EventsWhereInput[] | undefined;
    NOT?: EventsWhereInput[] | undefined;
    id?: BigIntFilter | undefined;
    created_at?: DateTimeNullableFilter | undefined;
    name?: StringNullableFilter | undefined;
    content?: StringNullableFilter | undefined;
    tickets?: StringNullableFilter | undefined;
    image?: StringNullableFilter | undefined;
    start?: StringNullableFilter | undefined;
    end?: StringNullableFilter | undefined;
    category?: StringNullableFilter | undefined;
    city?: StringNullableFilter | undefined;
    state?: StringNullableFilter | undefined;
    country?: StringNullableFilter | undefined;
    postalcode?: StringNullableFilter | undefined;
}
