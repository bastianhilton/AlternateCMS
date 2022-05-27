import { GraphQLResolveInfo } from "graphql";
import { AggregateInternalizationArgs } from "./args/AggregateInternalizationArgs";
import { CreateInternalizationArgs } from "./args/CreateInternalizationArgs";
import { CreateManyInternalizationArgs } from "./args/CreateManyInternalizationArgs";
import { DeleteInternalizationArgs } from "./args/DeleteInternalizationArgs";
import { DeleteManyInternalizationArgs } from "./args/DeleteManyInternalizationArgs";
import { FindFirstInternalizationArgs } from "./args/FindFirstInternalizationArgs";
import { FindManyInternalizationArgs } from "./args/FindManyInternalizationArgs";
import { FindUniqueInternalizationArgs } from "./args/FindUniqueInternalizationArgs";
import { GroupByInternalizationArgs } from "./args/GroupByInternalizationArgs";
import { UpdateInternalizationArgs } from "./args/UpdateInternalizationArgs";
import { UpdateManyInternalizationArgs } from "./args/UpdateManyInternalizationArgs";
import { UpsertInternalizationArgs } from "./args/UpsertInternalizationArgs";
import { Internalization } from "../../../models/Internalization";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateInternalization } from "../../outputs/AggregateInternalization";
import { InternalizationGroupBy } from "../../outputs/InternalizationGroupBy";
export declare class InternalizationCrudResolver {
    internalization(ctx: any, info: GraphQLResolveInfo, args: FindUniqueInternalizationArgs): Promise<Internalization | null>;
    findFirstInternalization(ctx: any, info: GraphQLResolveInfo, args: FindFirstInternalizationArgs): Promise<Internalization | null>;
    internalizations(ctx: any, info: GraphQLResolveInfo, args: FindManyInternalizationArgs): Promise<Internalization[]>;
    createInternalization(ctx: any, info: GraphQLResolveInfo, args: CreateInternalizationArgs): Promise<Internalization>;
    createManyInternalization(ctx: any, info: GraphQLResolveInfo, args: CreateManyInternalizationArgs): Promise<AffectedRowsOutput>;
    deleteInternalization(ctx: any, info: GraphQLResolveInfo, args: DeleteInternalizationArgs): Promise<Internalization | null>;
    updateInternalization(ctx: any, info: GraphQLResolveInfo, args: UpdateInternalizationArgs): Promise<Internalization | null>;
    deleteManyInternalization(ctx: any, info: GraphQLResolveInfo, args: DeleteManyInternalizationArgs): Promise<AffectedRowsOutput>;
    updateManyInternalization(ctx: any, info: GraphQLResolveInfo, args: UpdateManyInternalizationArgs): Promise<AffectedRowsOutput>;
    upsertInternalization(ctx: any, info: GraphQLResolveInfo, args: UpsertInternalizationArgs): Promise<Internalization>;
    aggregateInternalization(ctx: any, info: GraphQLResolveInfo, args: AggregateInternalizationArgs): Promise<AggregateInternalization>;
    groupByInternalization(ctx: any, info: GraphQLResolveInfo, args: GroupByInternalizationArgs): Promise<InternalizationGroupBy[]>;
}