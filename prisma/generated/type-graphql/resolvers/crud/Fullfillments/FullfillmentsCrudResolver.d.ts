import { GraphQLResolveInfo } from "graphql";
import { AggregateFullfillmentsArgs } from "./args/AggregateFullfillmentsArgs";
import { CreateManyFullfillmentsArgs } from "./args/CreateManyFullfillmentsArgs";
import { CreateOneFullfillmentsArgs } from "./args/CreateOneFullfillmentsArgs";
import { DeleteManyFullfillmentsArgs } from "./args/DeleteManyFullfillmentsArgs";
import { DeleteOneFullfillmentsArgs } from "./args/DeleteOneFullfillmentsArgs";
import { FindFirstFullfillmentsArgs } from "./args/FindFirstFullfillmentsArgs";
import { FindManyFullfillmentsArgs } from "./args/FindManyFullfillmentsArgs";
import { FindUniqueFullfillmentsArgs } from "./args/FindUniqueFullfillmentsArgs";
import { GroupByFullfillmentsArgs } from "./args/GroupByFullfillmentsArgs";
import { UpdateManyFullfillmentsArgs } from "./args/UpdateManyFullfillmentsArgs";
import { UpdateOneFullfillmentsArgs } from "./args/UpdateOneFullfillmentsArgs";
import { UpsertOneFullfillmentsArgs } from "./args/UpsertOneFullfillmentsArgs";
import { Fullfillments } from "../../../models/Fullfillments";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateFullfillments } from "../../outputs/AggregateFullfillments";
import { FullfillmentsGroupBy } from "../../outputs/FullfillmentsGroupBy";
export declare class FullfillmentsCrudResolver {
    aggregateFullfillments(ctx: any, info: GraphQLResolveInfo, args: AggregateFullfillmentsArgs): Promise<AggregateFullfillments>;
    createManyFullfillments(ctx: any, info: GraphQLResolveInfo, args: CreateManyFullfillmentsArgs): Promise<AffectedRowsOutput>;
    createOneFullfillments(ctx: any, info: GraphQLResolveInfo, args: CreateOneFullfillmentsArgs): Promise<Fullfillments>;
    deleteManyFullfillments(ctx: any, info: GraphQLResolveInfo, args: DeleteManyFullfillmentsArgs): Promise<AffectedRowsOutput>;
    deleteOneFullfillments(ctx: any, info: GraphQLResolveInfo, args: DeleteOneFullfillmentsArgs): Promise<Fullfillments | null>;
    findFirstFullfillments(ctx: any, info: GraphQLResolveInfo, args: FindFirstFullfillmentsArgs): Promise<Fullfillments | null>;
    findManyFullfillments(ctx: any, info: GraphQLResolveInfo, args: FindManyFullfillmentsArgs): Promise<Fullfillments[]>;
    findUniqueFullfillments(ctx: any, info: GraphQLResolveInfo, args: FindUniqueFullfillmentsArgs): Promise<Fullfillments | null>;
    groupByFullfillments(ctx: any, info: GraphQLResolveInfo, args: GroupByFullfillmentsArgs): Promise<FullfillmentsGroupBy[]>;
    updateManyFullfillments(ctx: any, info: GraphQLResolveInfo, args: UpdateManyFullfillmentsArgs): Promise<AffectedRowsOutput>;
    updateOneFullfillments(ctx: any, info: GraphQLResolveInfo, args: UpdateOneFullfillmentsArgs): Promise<Fullfillments | null>;
    upsertOneFullfillments(ctx: any, info: GraphQLResolveInfo, args: UpsertOneFullfillmentsArgs): Promise<Fullfillments>;
}
