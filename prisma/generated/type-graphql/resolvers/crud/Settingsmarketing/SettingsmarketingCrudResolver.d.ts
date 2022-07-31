import { GraphQLResolveInfo } from "graphql";
import { AggregateSettingsmarketingArgs } from "./args/AggregateSettingsmarketingArgs";
import { CreateManySettingsmarketingArgs } from "./args/CreateManySettingsmarketingArgs";
import { CreateOneSettingsmarketingArgs } from "./args/CreateOneSettingsmarketingArgs";
import { DeleteManySettingsmarketingArgs } from "./args/DeleteManySettingsmarketingArgs";
import { DeleteOneSettingsmarketingArgs } from "./args/DeleteOneSettingsmarketingArgs";
import { FindFirstSettingsmarketingArgs } from "./args/FindFirstSettingsmarketingArgs";
import { FindManySettingsmarketingArgs } from "./args/FindManySettingsmarketingArgs";
import { FindUniqueSettingsmarketingArgs } from "./args/FindUniqueSettingsmarketingArgs";
import { GroupBySettingsmarketingArgs } from "./args/GroupBySettingsmarketingArgs";
import { UpdateManySettingsmarketingArgs } from "./args/UpdateManySettingsmarketingArgs";
import { UpdateOneSettingsmarketingArgs } from "./args/UpdateOneSettingsmarketingArgs";
import { UpsertOneSettingsmarketingArgs } from "./args/UpsertOneSettingsmarketingArgs";
import { Settingsmarketing } from "../../../models/Settingsmarketing";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateSettingsmarketing } from "../../outputs/AggregateSettingsmarketing";
import { SettingsmarketingGroupBy } from "../../outputs/SettingsmarketingGroupBy";
export declare class SettingsmarketingCrudResolver {
    aggregateSettingsmarketing(ctx: any, info: GraphQLResolveInfo, args: AggregateSettingsmarketingArgs): Promise<AggregateSettingsmarketing>;
    createManySettingsmarketing(ctx: any, info: GraphQLResolveInfo, args: CreateManySettingsmarketingArgs): Promise<AffectedRowsOutput>;
    createOneSettingsmarketing(ctx: any, info: GraphQLResolveInfo, args: CreateOneSettingsmarketingArgs): Promise<Settingsmarketing>;
    deleteManySettingsmarketing(ctx: any, info: GraphQLResolveInfo, args: DeleteManySettingsmarketingArgs): Promise<AffectedRowsOutput>;
    deleteOneSettingsmarketing(ctx: any, info: GraphQLResolveInfo, args: DeleteOneSettingsmarketingArgs): Promise<Settingsmarketing | null>;
    findFirstSettingsmarketing(ctx: any, info: GraphQLResolveInfo, args: FindFirstSettingsmarketingArgs): Promise<Settingsmarketing | null>;
    settingsmarketings(ctx: any, info: GraphQLResolveInfo, args: FindManySettingsmarketingArgs): Promise<Settingsmarketing[]>;
    settingsmarketing(ctx: any, info: GraphQLResolveInfo, args: FindUniqueSettingsmarketingArgs): Promise<Settingsmarketing | null>;
    groupBySettingsmarketing(ctx: any, info: GraphQLResolveInfo, args: GroupBySettingsmarketingArgs): Promise<SettingsmarketingGroupBy[]>;
    updateManySettingsmarketing(ctx: any, info: GraphQLResolveInfo, args: UpdateManySettingsmarketingArgs): Promise<AffectedRowsOutput>;
    updateOneSettingsmarketing(ctx: any, info: GraphQLResolveInfo, args: UpdateOneSettingsmarketingArgs): Promise<Settingsmarketing | null>;
    upsertOneSettingsmarketing(ctx: any, info: GraphQLResolveInfo, args: UpsertOneSettingsmarketingArgs): Promise<Settingsmarketing>;
}
