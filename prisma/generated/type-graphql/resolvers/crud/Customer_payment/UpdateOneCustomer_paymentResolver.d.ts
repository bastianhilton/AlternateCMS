import { GraphQLResolveInfo } from "graphql";
import { UpdateOneCustomer_paymentArgs } from "./args/UpdateOneCustomer_paymentArgs";
import { Customer_payment } from "../../../models/Customer_payment";
export declare class UpdateOneCustomer_paymentResolver {
    updateOneCustomer_payment(ctx: any, info: GraphQLResolveInfo, args: UpdateOneCustomer_paymentArgs): Promise<Customer_payment | null>;
}
