import { GraphQLResolveInfo } from "graphql";
import { AggregateTagsArgs } from "./args/AggregateTagsArgs";
import { CreateManyTagsArgs } from "./args/CreateManyTagsArgs";
import { CreateTagsArgs } from "./args/CreateTagsArgs";
import { DeleteManyTagsArgs } from "./args/DeleteManyTagsArgs";
import { DeleteTagsArgs } from "./args/DeleteTagsArgs";
import { FindFirstTagsArgs } from "./args/FindFirstTagsArgs";
import { FindManyTagsArgs } from "./args/FindManyTagsArgs";
import { FindUniqueTagsArgs } from "./args/FindUniqueTagsArgs";
import { GroupByTagsArgs } from "./args/GroupByTagsArgs";
import { UpdateManyTagsArgs } from "./args/UpdateManyTagsArgs";
import { UpdateTagsArgs } from "./args/UpdateTagsArgs";
import { UpsertTagsArgs } from "./args/UpsertTagsArgs";
import { Tags } from "../../../models/Tags";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateTags } from "../../outputs/AggregateTags";
import { TagsGroupBy } from "../../outputs/TagsGroupBy";
export declare class TagsCrudResolver {
    findUniqueTags(ctx: any, info: GraphQLResolveInfo, args: FindUniqueTagsArgs): Promise<Tags | null>;
    findFirstTags(ctx: any, info: GraphQLResolveInfo, args: FindFirstTagsArgs): Promise<Tags | null>;
    findManyTags(ctx: any, info: GraphQLResolveInfo, args: FindManyTagsArgs): Promise<Tags[]>;
    createTags(ctx: any, info: GraphQLResolveInfo, args: CreateTagsArgs): Promise<Tags>;
    createManyTags(ctx: any, info: GraphQLResolveInfo, args: CreateManyTagsArgs): Promise<AffectedRowsOutput>;
    deleteTags(ctx: any, info: GraphQLResolveInfo, args: DeleteTagsArgs): Promise<Tags | null>;
    updateTags(ctx: any, info: GraphQLResolveInfo, args: UpdateTagsArgs): Promise<Tags | null>;
    deleteManyTags(ctx: any, info: GraphQLResolveInfo, args: DeleteManyTagsArgs): Promise<AffectedRowsOutput>;
    updateManyTags(ctx: any, info: GraphQLResolveInfo, args: UpdateManyTagsArgs): Promise<AffectedRowsOutput>;
    upsertTags(ctx: any, info: GraphQLResolveInfo, args: UpsertTagsArgs): Promise<Tags>;
    aggregateTags(ctx: any, info: GraphQLResolveInfo, args: AggregateTagsArgs): Promise<AggregateTags>;
    groupByTags(ctx: any, info: GraphQLResolveInfo, args: GroupByTagsArgs): Promise<TagsGroupBy[]>;
}
