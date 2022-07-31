import { GraphQLResolveInfo } from "graphql";
import { DeleteOneCustomer_paymentArgs } from "./args/DeleteOneCustomer_paymentArgs";
import { Customer_payment } from "../../../models/Customer_payment";
export declare class DeleteOneCustomer_paymentResolver {
    deleteOneCustomer_payment(ctx: any, info: GraphQLResolveInfo, args: DeleteOneCustomer_paymentArgs): Promise<Customer_payment | null>;
}
