import { AccountsOrderByWithRelationInput } from "../../../inputs/AccountsOrderByWithRelationInput";
import { AccountsWhereInput } from "../../../inputs/AccountsWhereInput";
import { AccountsWhereUniqueInput } from "../../../inputs/AccountsWhereUniqueInput";
export declare class FindManyAccountsArgs {
    where?: AccountsWhereInput | undefined;
    orderBy?: AccountsOrderByWithRelationInput[] | undefined;
    cursor?: AccountsWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
    distinct?: Array<"id" | "created_at" | "name" | "website" | "office_phone" | "fax" | "email" | "address" | "postalcode" | "city" | "state" | "country" | "assigned_to" | "alt_address" | "alt_postalcode" | "alt_city" | "alt_state" | "alt_country" | "type" | "industry" | "employees" | "annual_revenue" | "member_of" | "campaign"> | undefined;
}
