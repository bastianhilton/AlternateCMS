import { GraphQLResolveInfo } from "graphql";
import { AggregateEmailsArgs } from "./args/AggregateEmailsArgs";
import { CreateEmailsArgs } from "./args/CreateEmailsArgs";
import { CreateManyEmailsArgs } from "./args/CreateManyEmailsArgs";
import { DeleteEmailsArgs } from "./args/DeleteEmailsArgs";
import { DeleteManyEmailsArgs } from "./args/DeleteManyEmailsArgs";
import { FindFirstEmailsArgs } from "./args/FindFirstEmailsArgs";
import { FindManyEmailsArgs } from "./args/FindManyEmailsArgs";
import { FindUniqueEmailsArgs } from "./args/FindUniqueEmailsArgs";
import { GroupByEmailsArgs } from "./args/GroupByEmailsArgs";
import { UpdateEmailsArgs } from "./args/UpdateEmailsArgs";
import { UpdateManyEmailsArgs } from "./args/UpdateManyEmailsArgs";
import { UpsertEmailsArgs } from "./args/UpsertEmailsArgs";
import { Emails } from "../../../models/Emails";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateEmails } from "../../outputs/AggregateEmails";
import { EmailsGroupBy } from "../../outputs/EmailsGroupBy";
export declare class EmailsCrudResolver {
    findUniqueEmails(ctx: any, info: GraphQLResolveInfo, args: FindUniqueEmailsArgs): Promise<Emails | null>;
    findFirstEmails(ctx: any, info: GraphQLResolveInfo, args: FindFirstEmailsArgs): Promise<Emails | null>;
    findManyEmails(ctx: any, info: GraphQLResolveInfo, args: FindManyEmailsArgs): Promise<Emails[]>;
    createEmails(ctx: any, info: GraphQLResolveInfo, args: CreateEmailsArgs): Promise<Emails>;
    createManyEmails(ctx: any, info: GraphQLResolveInfo, args: CreateManyEmailsArgs): Promise<AffectedRowsOutput>;
    deleteEmails(ctx: any, info: GraphQLResolveInfo, args: DeleteEmailsArgs): Promise<Emails | null>;
    updateEmails(ctx: any, info: GraphQLResolveInfo, args: UpdateEmailsArgs): Promise<Emails | null>;
    deleteManyEmails(ctx: any, info: GraphQLResolveInfo, args: DeleteManyEmailsArgs): Promise<AffectedRowsOutput>;
    updateManyEmails(ctx: any, info: GraphQLResolveInfo, args: UpdateManyEmailsArgs): Promise<AffectedRowsOutput>;
    upsertEmails(ctx: any, info: GraphQLResolveInfo, args: UpsertEmailsArgs): Promise<Emails>;
    aggregateEmails(ctx: any, info: GraphQLResolveInfo, args: AggregateEmailsArgs): Promise<AggregateEmails>;
    groupByEmails(ctx: any, info: GraphQLResolveInfo, args: GroupByEmailsArgs): Promise<EmailsGroupBy[]>;
}
