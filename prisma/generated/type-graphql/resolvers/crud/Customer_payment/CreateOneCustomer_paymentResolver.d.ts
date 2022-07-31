import { GraphQLResolveInfo } from "graphql";
import { CreateOneCustomer_paymentArgs } from "./args/CreateOneCustomer_paymentArgs";
import { Customer_payment } from "../../../models/Customer_payment";
export declare class CreateOneCustomer_paymentResolver {
    createOneCustomer_payment(ctx: any, info: GraphQLResolveInfo, args: CreateOneCustomer_paymentArgs): Promise<Customer_payment>;
}
