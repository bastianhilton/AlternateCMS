import { GraphQLResolveInfo } from "graphql";
import { AggregateStatesArgs } from "./args/AggregateStatesArgs";
import { CreateManyStatesArgs } from "./args/CreateManyStatesArgs";
import { CreateStatesArgs } from "./args/CreateStatesArgs";
import { DeleteManyStatesArgs } from "./args/DeleteManyStatesArgs";
import { DeleteStatesArgs } from "./args/DeleteStatesArgs";
import { FindFirstStatesArgs } from "./args/FindFirstStatesArgs";
import { FindManyStatesArgs } from "./args/FindManyStatesArgs";
import { FindUniqueStatesArgs } from "./args/FindUniqueStatesArgs";
import { GroupByStatesArgs } from "./args/GroupByStatesArgs";
import { UpdateManyStatesArgs } from "./args/UpdateManyStatesArgs";
import { UpdateStatesArgs } from "./args/UpdateStatesArgs";
import { UpsertStatesArgs } from "./args/UpsertStatesArgs";
import { States } from "../../../models/States";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateStates } from "../../outputs/AggregateStates";
import { StatesGroupBy } from "../../outputs/StatesGroupBy";
export declare class StatesCrudResolver {
    findUniqueStates(ctx: any, info: GraphQLResolveInfo, args: FindUniqueStatesArgs): Promise<States | null>;
    findFirstStates(ctx: any, info: GraphQLResolveInfo, args: FindFirstStatesArgs): Promise<States | null>;
    findManyStates(ctx: any, info: GraphQLResolveInfo, args: FindManyStatesArgs): Promise<States[]>;
    createStates(ctx: any, info: GraphQLResolveInfo, args: CreateStatesArgs): Promise<States>;
    createManyStates(ctx: any, info: GraphQLResolveInfo, args: CreateManyStatesArgs): Promise<AffectedRowsOutput>;
    deleteStates(ctx: any, info: GraphQLResolveInfo, args: DeleteStatesArgs): Promise<States | null>;
    updateStates(ctx: any, info: GraphQLResolveInfo, args: UpdateStatesArgs): Promise<States | null>;
    deleteManyStates(ctx: any, info: GraphQLResolveInfo, args: DeleteManyStatesArgs): Promise<AffectedRowsOutput>;
    updateManyStates(ctx: any, info: GraphQLResolveInfo, args: UpdateManyStatesArgs): Promise<AffectedRowsOutput>;
    upsertStates(ctx: any, info: GraphQLResolveInfo, args: UpsertStatesArgs): Promise<States>;
    aggregateStates(ctx: any, info: GraphQLResolveInfo, args: AggregateStatesArgs): Promise<AggregateStates>;
    groupByStates(ctx: any, info: GraphQLResolveInfo, args: GroupByStatesArgs): Promise<StatesGroupBy[]>;
}