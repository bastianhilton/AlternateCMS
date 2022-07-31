import { GraphQLResolveInfo } from "graphql";
import { UpsertOneCustomer_paymentArgs } from "./args/UpsertOneCustomer_paymentArgs";
import { Customer_payment } from "../../../models/Customer_payment";
export declare class UpsertOneCustomer_paymentResolver {
    upsertOneCustomer_payment(ctx: any, info: GraphQLResolveInfo, args: UpsertOneCustomer_paymentArgs): Promise<Customer_payment>;
}
