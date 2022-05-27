import { CommentsListRelationFilter } from "../inputs/CommentsListRelationFilter";
import { Credit_memosListRelationFilter } from "../inputs/Credit_memosListRelationFilter";
import { Customer_groupListRelationFilter } from "../inputs/Customer_groupListRelationFilter";
import { Customer_paymentRelationFilter } from "../inputs/Customer_paymentRelationFilter";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { EmailsListRelationFilter } from "../inputs/EmailsListRelationFilter";
import { IntFilter } from "../inputs/IntFilter";
import { Newsletter_subscribersListRelationFilter } from "../inputs/Newsletter_subscribersListRelationFilter";
import { OrdersListRelationFilter } from "../inputs/OrdersListRelationFilter";
import { QuotesListRelationFilter } from "../inputs/QuotesListRelationFilter";
import { ReturnsListRelationFilter } from "../inputs/ReturnsListRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
export declare class CustomersWhereInput {
    AND?: CustomersWhereInput[] | undefined;
    OR?: CustomersWhereInput[] | undefined;
    NOT?: CustomersWhereInput[] | undefined;
    id?: IntFilter | undefined;
    thumbnail?: StringNullableFilter | undefined;
    name_prefix?: StringNullableFilter | undefined;
    first_name?: StringFilter | undefined;
    middle_name?: StringNullableFilter | undefined;
    last_name?: StringFilter | undefined;
    email?: StringFilter | undefined;
    customer_group?: StringNullableFilter | undefined;
    phone?: StringNullableFilter | undefined;
    zipcode?: StringNullableFilter | undefined;
    name_suffix?: StringNullableFilter | undefined;
    websites?: StringNullableFilter | undefined;
    product?: StringNullableFilter | undefined;
    country?: StringNullableFilter | undefined;
    state?: StringNullableFilter | undefined;
    customer_since?: DateTimeNullableFilter | undefined;
    confirmed_email?: StringNullableFilter | undefined;
    date_of_birth?: StringNullableFilter | undefined;
    tax_vat_number?: StringNullableFilter | undefined;
    gender?: StringNullableFilter | undefined;
    description?: StringNullableFilter | undefined;
    short_description?: StringNullableFilter | undefined;
    image?: StringNullableFilter | undefined;
    Address?: StringNullableFilter | undefined;
    address_two?: StringNullableFilter | undefined;
    payment_type?: StringNullableFilter | undefined;
    username?: StringNullableFilter | undefined;
    password?: StringNullableFilter | undefined;
    comments?: CommentsListRelationFilter | undefined;
    credit_memos?: Credit_memosListRelationFilter | undefined;
    customer_group_customer_groupTocustomers?: Customer_groupListRelationFilter | undefined;
    customer_payment?: Customer_paymentRelationFilter | undefined;
    emails?: EmailsListRelationFilter | undefined;
    newsletter_subscribers?: Newsletter_subscribersListRelationFilter | undefined;
    orders?: OrdersListRelationFilter | undefined;
    quotes?: QuotesListRelationFilter | undefined;
    returns?: ReturnsListRelationFilter | undefined;
}