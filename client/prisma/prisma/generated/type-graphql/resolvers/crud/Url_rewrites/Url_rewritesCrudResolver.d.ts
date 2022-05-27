import { GraphQLResolveInfo } from "graphql";
import { AggregateUrl_rewritesArgs } from "./args/AggregateUrl_rewritesArgs";
import { CreateManyUrl_rewritesArgs } from "./args/CreateManyUrl_rewritesArgs";
import { CreateUrl_rewritesArgs } from "./args/CreateUrl_rewritesArgs";
import { DeleteManyUrl_rewritesArgs } from "./args/DeleteManyUrl_rewritesArgs";
import { DeleteUrl_rewritesArgs } from "./args/DeleteUrl_rewritesArgs";
import { FindFirstUrl_rewritesArgs } from "./args/FindFirstUrl_rewritesArgs";
import { FindManyUrl_rewritesArgs } from "./args/FindManyUrl_rewritesArgs";
import { FindUniqueUrl_rewritesArgs } from "./args/FindUniqueUrl_rewritesArgs";
import { GroupByUrl_rewritesArgs } from "./args/GroupByUrl_rewritesArgs";
import { UpdateManyUrl_rewritesArgs } from "./args/UpdateManyUrl_rewritesArgs";
import { UpdateUrl_rewritesArgs } from "./args/UpdateUrl_rewritesArgs";
import { UpsertUrl_rewritesArgs } from "./args/UpsertUrl_rewritesArgs";
import { Url_rewrites } from "../../../models/Url_rewrites";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateUrl_rewrites } from "../../outputs/AggregateUrl_rewrites";
import { Url_rewritesGroupBy } from "../../outputs/Url_rewritesGroupBy";
export declare class Url_rewritesCrudResolver {
    findUniqueUrl_rewrites(ctx: any, info: GraphQLResolveInfo, args: FindUniqueUrl_rewritesArgs): Promise<Url_rewrites | null>;
    findFirstUrl_rewrites(ctx: any, info: GraphQLResolveInfo, args: FindFirstUrl_rewritesArgs): Promise<Url_rewrites | null>;
    findManyUrl_rewrites(ctx: any, info: GraphQLResolveInfo, args: FindManyUrl_rewritesArgs): Promise<Url_rewrites[]>;
    createUrl_rewrites(ctx: any, info: GraphQLResolveInfo, args: CreateUrl_rewritesArgs): Promise<Url_rewrites>;
    createManyUrl_rewrites(ctx: any, info: GraphQLResolveInfo, args: CreateManyUrl_rewritesArgs): Promise<AffectedRowsOutput>;
    deleteUrl_rewrites(ctx: any, info: GraphQLResolveInfo, args: DeleteUrl_rewritesArgs): Promise<Url_rewrites | null>;
    updateUrl_rewrites(ctx: any, info: GraphQLResolveInfo, args: UpdateUrl_rewritesArgs): Promise<Url_rewrites | null>;
    deleteManyUrl_rewrites(ctx: any, info: GraphQLResolveInfo, args: DeleteManyUrl_rewritesArgs): Promise<AffectedRowsOutput>;
    updateManyUrl_rewrites(ctx: any, info: GraphQLResolveInfo, args: UpdateManyUrl_rewritesArgs): Promise<AffectedRowsOutput>;
    upsertUrl_rewrites(ctx: any, info: GraphQLResolveInfo, args: UpsertUrl_rewritesArgs): Promise<Url_rewrites>;
    aggregateUrl_rewrites(ctx: any, info: GraphQLResolveInfo, args: AggregateUrl_rewritesArgs): Promise<AggregateUrl_rewrites>;
    groupByUrl_rewrites(ctx: any, info: GraphQLResolveInfo, args: GroupByUrl_rewritesArgs): Promise<Url_rewritesGroupBy[]>;
}